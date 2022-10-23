import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Details from "../views/Details.vue";
import Create from "../views/Create.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/posts/:id",
      name: "details",
      component: Details,
      props: true,
    },
    {
      path: "/create",
      name: "create",
      component: Create,
      props: true,
    },
  ],
});

export default router;
