import { createApp } from 'vue'
import App from './App.vue'
import './main.css'

const app = createApp( App );

import TwicPics from "@twicpics/components/vue3";
import "@twicpics/components/style.css";

app.use( TwicPics, {
  "domain": `https://demo.twic.pics`
} );

app.mount( `#app` );

// createApp(App).mount('#app')
