
require('./bootstrap');

window.Vue = require('vue');
//import Vue from 'vue'

//vuex
//import Vue from 'vue'

import Vuex from 'vuex'
Vue.use(Vuex)
//import storeData from "./store/indexx"
import storeData from './components/store/index.js'
const store = new Vuex.Store(
storeData
)
// moment js require
   //var moment = require('moment');
  //moment().format(); or
  //import moment from 'moment'
  //Vue.filter('timeformat', function (arg) {
  // return moment(arg).format("MMM Do YYYY")
   //})
  import {filter} from './filter'
// text editor support
import 'v-markdown-editor/dist/index.css';
import Editor from 'v-markdown-editor'
Vue.use(Editor);

//vue router
import VueRouter from 'vue-router'

Vue.use(VueRouter)



import {routes} from './routes.js'
//Vue.component('example-component', require('./components/ExampleComponent.vue'));
//Vue.component('home', require('./components/admin/AdminHome.vue'));
Vue.component('admin-main', require('./components/admin/AdminMaster.vue'));
Vue.component('home-main', require('./components/public/PublicMaster.vue'));

//vue form
import { Form, HasError, AlertError } from 'vform'

Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
 window.Form=Form;
 
//sweet alert2
import Swal from 'sweetalert2'
window.Swal=Swal;
const toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

window.toast=toast

const router = new VueRouter({
  routes,
  mode:'hash'
})


const app = new Vue({
    el: '#app',
	router,
	store
});
