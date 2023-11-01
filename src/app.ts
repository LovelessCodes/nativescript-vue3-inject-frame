import { createPinia } from 'pinia';
import { createApp } from 'nativescript-vue';
import Home from './components/Home.vue';

const app = createApp(Home);

app.use(createPinia());

app.start();
