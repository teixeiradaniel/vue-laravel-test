require('./bootstrap');

window.Vue = require('vue');

import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:8000/api/'

import router from './routes/router.js'
import store from './store.js'
import Vuetify from 'vuetify'
// import VueFusionCharts from 'vue-fusioncharts';
// import FusionCharts from 'fusioncharts';
// import Charts from 'fusioncharts/fusioncharts.charts';
// import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

Vue.use(Vuetify)

const opts = {}

const app = new Vue({
    router,
    store,
    vuetify: new Vuetify(opts),
    el: '#app',
});
