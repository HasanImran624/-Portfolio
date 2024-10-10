import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { 
  faMicrosoft, 
  faDocker, 
  faAws, 
  faVuejs, 
  faAngular, 
  faJs, 
  faHtml5, 
  faCss3 
} from '@fortawesome/free-brands-svg-icons';
import { 
  faLayerGroup, 
  faCloud, 
  faExchangeAlt, 
  faDatabase, 
  faProjectDiagram, 
  faMicrochip, 
  faTasks 
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faMicrosoft, 
  faDocker, 
  faAws, 
  faVuejs, 
  faAngular, 
  faJs, 
  faHtml5, 
  faCss3, 
  faLayerGroup, 
  faCloud, 
  faExchangeAlt, 
  faDatabase, 
  faProjectDiagram, 
  faMicrochip, 
  faTasks
);


import { createApp } from 'vue'
import App from './App.vue'
import 'animate.css';
const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app')
