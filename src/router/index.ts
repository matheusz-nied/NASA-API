// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Apods from "../pages/Apods.vue";
import ApodDetail from "@/pages/ApodDetail.vue";
// const ApodDetail = {   template: '<div>Apod date {{ $route.params.date }}</div>',
// };

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
});

export default router;
