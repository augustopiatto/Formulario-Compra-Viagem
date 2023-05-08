import { createRouter, createWebHistory } from "vue-router";
import CheckoutPage from "../views/checkout-page.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: CheckoutPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
