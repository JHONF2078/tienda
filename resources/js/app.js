require('./bootstrap');

import vue from 'vue';

window.Vue=vue;

import App from './components/mainapp.vue';
import VueRouter from 'vue-router';
import {routes} from './routes';
import store from './store';
import ViewUI from 'view-design';
import common from './common';
import 'view-design/dist/styles/iview.css';


// Require Vue
//window.Vue = require('vue').default;

// Register Vue Components
//Vue.component('App', require('./components/App.vue').default);

Vue.use(VueRouter);
Vue.use(ViewUI);
Vue.mixin(common);

const router= new VueRouter({
    mode: 'history',
    routes: routes
});


const app= new Vue({
    el: '#app',
    router: router,
    store: store,
    render: h=>h(App)
});
