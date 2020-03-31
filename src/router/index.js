import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import LoginForm from "../views/LoginForm.vue";
import Search from "../views/Search.vue"


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },{
    path:"/login",
    name:"LoginForm",
    // component: ()=>import("../views/LoginForm.vue")
    component:LoginForm
  },
  {
    path:"/search",
    name:"Search",
    component: Search
  }
];

const router = new VueRouter({
  routes
});

export default router;
