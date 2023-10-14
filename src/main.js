import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap'; 
import router from './router'; // This is the router configuration

createApp(App).use(router).mount('#app')
