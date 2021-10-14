import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './main.css';

const app = createApp( App );

import TwicPics from "@twicpics/components/vue3";
import "@twicpics/components/style.css";

app.use( TwicPics, {
  "domain": `https://demo.twic.pics`
} );
app.use( router );
app.mount( `#app` );
