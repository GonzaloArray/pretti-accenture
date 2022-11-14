import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'material-icons/iconfont/material-icons.css'
import './style.css'
import App from './App.vue'

import router from './router'


createApp(App).use(router).mount('#app')
