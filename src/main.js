import { createApp } from 'vue'
import App from './App.vue'
import ArcoVue from '@arco-design/web-vue';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import '@arco-design/web-vue/dist/arco.css';
import router from './router/router';

const app = createApp(App);
app.use(ArcoVue);
app.use(router);
app.use(ArcoVueIcon);
app.mount('#app');
