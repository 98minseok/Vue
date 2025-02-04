import HomeView from "@/view/HomeView.vue";
import TestView from "@/view/TestView.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: HomeView, name: "Home" },
  { path: "/test", component: TestView, name: "Test" },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
