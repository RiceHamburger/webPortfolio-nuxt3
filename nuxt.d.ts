import { I18nOptions } from "@nuxtjs/i18n";

declare module "nuxt/schema" {
  interface NuxtConfig {
    i18n?: I18nOptions;
  }
  interface NuxtOptions {
    i18n?: I18nOptions;
  }
}
