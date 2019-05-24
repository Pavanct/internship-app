import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'


Vue.use(VueRouter);
Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: LandingPage },
    { path: '/landingpage', component: LandingPage},
    { path: '/login', component: Login },
  ]
});

new Vue({
  router,
  template: `
    <div>
      <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item"><router-link to="/" class="nav-link">Landing Page</router-link></li>
            <li class="nav-item"><router-link to="/landingpage" class="nav-link">Landing Page</router-link></li>
            <li class="nav-item"><router-link to="/login" class="nav-link">Login</router-link></li>
          </ul>
        </div>
      </nav>
      <router-view class="view"></router-view>
    </div>
  `,
  render: h => h(App),
}).$mount('#app')
