import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Setup from "../views/Setup.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/setup-laboratorio",
    name: "Setup",
    component: Setup,
    props: { laboratorio: true, usuario: false, clinica: false },
  },
  {
    path: "/setup-usuario",
    name: "Setup",
    component: Setup,
    props: { laboratorio: false, usuario: true, clinica: false },
  },
  {
    path: "/setup-clinica",
    name: "Setup",
    component: Setup,
    props: { laboratorio: false, usuario: false, clinica: true },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
