/**
 * Affiliate SDK v1.0
 * 项目方集成此 SDK 用于上报转化
 * 
 * 使用方法:
 * 1. 引入 SDK: <script src="https://your-domain.com/sdk/affiliate.js"></script>
 * 2. 初始化: AffiliateSDK.init({ apiKey: 'your-api-key', apiSecret: 'your-api-secret' })
 * 3. 上报转化: AffiliateSDK.trackConversion({ event: 'purchase', orderId: '123', orderAmount: 99.00 })
 */

(function(window) {
  'use strict';

  var SDK_VERSION = '1.0.0';
  var API_ENDPOINT = '';  // 初始化时设置

  var config = {
    apiKey: '',
    apiSecret: '',
    debug: false
  };

  // HMAC-SHA256 签名
  async function hmacSHA256(message, secret) {
    var encoder = new TextEncoder();
    var keyData = encoder.encode(secret);
    var messageData = encoder.encode(message);
    
    var key = await crypto.subtle.importKey(
      'raw',
      keyData,
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['sign']
    );
    
    var signature = await crypto.subtle.sign('HMAC', key, messageData);
    return Array.from(new Uint8Array(signature))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('');
  }

  // 从 URL 或 Cookie 获取推广码
  function getAffiliateCode() {
    // 1. 先从 URL 参数获取
    var urlParams = new URLSearchParams(window.location.search);
    var code = urlParams.get('kolect_ref') || urlParams.get('ref');
    
    if (code) {
      // 保存到 localStorage
      try {
        localStorage.setItem('affiliate_code', code);
        localStorage.setItem('affiliate_time', Date.now().toString());
      } catch (e) {}
      return code;
    }
    
    // 2. 从 localStorage 获取（30天有效）
    try {
      var savedCode = localStorage.getItem('affiliate_code');
      var savedTime = localStorage.getItem('affiliate_time');
      if (savedCode && savedTime) {
        var daysDiff = (Date.now() - parseInt(savedTime)) / (1000 * 60 * 60 * 24);
        if (daysDiff < 30) {
          return savedCode;
        }
      }
    } catch (e) {}
    
    return null;
  }

  // 日志
  function log() {
    if (config.debug) {
      console.log.apply(console, ['[AffiliateSDK]'].concat(Array.from(arguments)));
    }
  }

  // SDK 对象
  var AffiliateSDK = {
    version: SDK_VERSION,

    /**
     * 初始化 SDK
     * @param {Object} options
     * @param {string} options.apiKey - API Key
     * @param {string} options.apiSecret - API Secret
     * @param {string} [options.endpoint] - API 端点（可选）
     * @param {boolean} [options.debug] - 调试模式
     */
    init: function(options) {
      if (!options.apiKey || !options.apiSecret) {
        console.error('[AffiliateSDK] apiKey and apiSecret are required');
        return;
      }

      config.apiKey = options.apiKey;
      config.apiSecret = options.apiSecret;
      config.debug = options.debug || false;
      
      // 设置 API 端点
      API_ENDPOINT = options.endpoint || 'https://affiliate.kolect.ai';
      
      log('Initialized with apiKey:', config.apiKey.substring(0, 8) + '...');
      
      // 自动保存推广码
      getAffiliateCode();
    },

    /**
     * 获取当前推广码
     * @returns {string|null}
     */
    getAffiliateCode: getAffiliateCode,

    /**
     * 上报转化
     * @param {Object} data
     * @param {string} data.event - 事件类型: register, purchase, subscribe, custom
     * @param {string} [data.userId] - 项目方用户 ID（注册/付费的用户）
     * @param {string} [data.userEmail] - 项目方用户邮箱（可选）
     * @param {string} [data.orderId] - 订单 ID
     * @param {number} [data.orderAmount] - 订单金额
     * @param {number} [data.extraCommission] - 额外佣金金额（消费/订阅时可用）
     * @param {string} [data.extraCommissionNote] - 额外佣金说明
     * @param {Object} [data.eventData] - 额外数据
     * @returns {Promise}
     */
    trackConversion: async function(data) {
      var affiliateCode = getAffiliateCode();
      
      // userId 必填
      if (!data.userId) {
        console.error('[AffiliateSDK] userId is required');
        return { success: false, error: 'userId is required' };
      }
      
      // 必须有推广码或之前注册过（通过 userId 追溯）
      if (!affiliateCode) {
        log('No affiliate code found, will try to track by userId');
      }

      if (!config.apiKey || !config.apiSecret) {
        console.error('[AffiliateSDK] SDK not initialized');
        return { success: false, error: 'SDK not initialized' };
      }

      if (!data.event) {
        console.error('[AffiliateSDK] event is required');
        return { success: false, error: 'event is required' };
      }

      var timestamp = Date.now().toString();
      var orderId = data.orderId || '';
      var userId = data.userId;
      
      // 生成签名（使用 affiliateCode || userId）
      var signData = config.apiKey + timestamp + (affiliateCode || userId) + data.event + orderId;
      var signature = await hmacSHA256(signData, config.apiSecret);

      var payload = {
        affiliateCode: affiliateCode,
        event: data.event,
        userId: data.userId || null,
        userEmail: data.userEmail || null,
        orderId: data.orderId || null,
        orderAmount: data.orderAmount || null,
        extraCommission: data.extraCommission || null,
        extraCommissionNote: data.extraCommissionNote || null,
        eventData: data.eventData || null
      };

      log('Tracking conversion:', payload);

      try {
        var response = await fetch(API_ENDPOINT + '/api/sdk/conversion', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-API-Key': config.apiKey,
            'X-Signature': signature,
            'X-Timestamp': timestamp
          },
          body: JSON.stringify(payload)
        });

        var result = await response.json();
        
        if (response.ok) {
          log('Conversion tracked successfully:', result);
          return { success: true, data: result };
        } else {
          log('Conversion tracking failed:', result);
          return { success: false, error: result.error };
        }
      } catch (error) {
        console.error('[AffiliateSDK] Request failed:', error);
        return { success: false, error: error.message };
      }
    },

    /**
     * 快捷方法：上报注册转化
     * @param {Object} data
     * @param {string} data.userId - 新注册用户 ID（必填）
     */
    trackRegister: function(data) {
      return this.trackConversion({ event: 'register', ...data });
    },

    /**
     * 快捷方法：上报购买转化
     * @param {Object} data
     * @param {string} data.userId - 付费用户 ID（必填）
     * @param {string} [data.orderId] - 订单 ID
     * @param {number} [data.orderAmount] - 订单金额
     * @param {number} [data.extraCommission] - 额外佣金金额
     * @param {string} [data.extraCommissionNote] - 额外佣金说明
     */
    trackPurchase: function(data) {
      return this.trackConversion({ event: 'purchase', ...data });
    },

    /**
     * 快捷方法：上报订阅转化
     * @param {Object} data
     * @param {string} data.userId - 订阅用户 ID（必填）
     * @param {string} [data.orderId] - 订阅 ID
     * @param {number} [data.orderAmount] - 订阅金额
     * @param {number} [data.extraCommission] - 额外佣金金额
     * @param {string} [data.extraCommissionNote] - 额外佣金说明
     */
    trackSubscribe: function(data) {
      return this.trackConversion({ event: 'subscribe', ...data });
    },

    /**
     * 快捷方法：上报自定义事件转化
     * @param {string} eventKey - 自定义事件 Key（必填，需在后台配置）
     * @param {Object} data
     * @param {string} data.userId - 用户 ID（必填）
     * @param {string} [data.orderId] - 订单 ID
     * @param {number} [data.orderAmount] - 订单金额
     * @param {number} [data.extraCommission] - 额外佣金金额
     * @param {string} [data.extraCommissionNote] - 额外佣金说明
     * @param {Object} [data.eventData] - 额外数据
     */
    trackCustom: function(eventKey, data) {
      return this.trackConversion({ event: eventKey, ...data });
    }
  };

  // 暴露到全局
  window.AffiliateSDK = AffiliateSDK;

})(window);
