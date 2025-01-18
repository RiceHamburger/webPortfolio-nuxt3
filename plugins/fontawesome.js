// filepath: /workspace/webPortfolio-nuxt3/plugins/fontawesome.js
import { library, config } from "@fortawesome/fontawesome-svg-core";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faSun);

config.autoAddCss = false;

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("fa", FontAwesomeIcon);
});
