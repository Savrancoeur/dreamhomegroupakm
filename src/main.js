import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./style.css";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { 
  faBars, 
  faXmark,
  faBuilding,
  faPaintRoller,
  faSolarPanel 
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faFacebook, 
  faInstagram, 
  faLinkedin, 
  faBars, 
  faXmark,
  faBuilding,
  faPaintRoller,
  faSolarPanel
);

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);

// Add viewport plugin
app.config.globalProperties.$viewport = {
  width: window.innerWidth,
};

window.addEventListener("resize", () => {
  app.config.globalProperties.$viewport.width = window.innerWidth;
});

app.mount("#app");
