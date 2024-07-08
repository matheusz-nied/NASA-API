// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
const Apod = { template: "<div>Apod</div>" };
const ApodDetail = { template: " <div> Product Page </div> <span> Looking for Product: {{ $route.params.id }} </span>" };

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/apods",
    name: "Apod",
    component: Apod,
  },
  {
    path: "/apods/:id",
    name: "ApodDetail",
    component: ApodDetail,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
