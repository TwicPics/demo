import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/Home.vue";
import Storefront from "@/components/Storefront.vue";
import ProductOverview from "@/components/ProductOverview.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/storefront",
    name: "Storefront",
    component: Storefront
  },
  {
    path: "/product-overview",
    name: "Product overview",
    component: ProductOverview
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
