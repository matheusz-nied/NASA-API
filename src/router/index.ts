// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Apods from "../pages/Apods.vue";
import ApodDetail from "@/pages/ApodDetail.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/apods",
    name: "Apod",
    component: Apods ,
  },
  {
    path: "/apods/:date",
    name: "ApodDetail",
    component: ApodDetail,
    props: true,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, behavior: 'smooth' };
    }
  },
});

export default router;
