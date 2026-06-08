import type { RouteLocale } from './config';

/** Native endonym shown in the language menu. */
export const LOCALE_NATIVE_NAME: Record<RouteLocale, string> = {
  en: 'English',
  de: 'Deutsch',
  pt: 'Português',
  es: 'Español',
  fr: 'Français',
  it: 'Italiano',
  pl: 'Polski',
};

/** Accessible label on the dropdown trigger (“Language”). */
export const LOCALE_SWITCHER_MENU_LABEL: Record<RouteLocale, string> = {
  en: 'Language',
  de: 'Sprache',
  pt: 'Idioma',
  es: 'Idioma',
  fr: 'Langue',
  it: 'Lingua',
  pl: 'Język',
};
