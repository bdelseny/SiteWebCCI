import { getCVContent } from "./cvContent.js";

// Define route components.
const CV = { template: getCVContent() }
// const Bar = { template: '<div>bar</div>' }

// Define routes
const routes = [
  { path: '/CV', component: CV }
//   { path: '/bar', component: Bar }
]

// Create the router instance and pass the `routes` option
const router = new VueRouter({
  routes
})

// Create and mount the root instance.
const app = new Vue({
  router
}).$mount('#app')