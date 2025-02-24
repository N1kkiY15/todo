import { createRouter, createWebHistory } from "vue-router";
import ToDoView from "@/views/ToDoView.vue";
import ToDoDetails from "@/views/ToDoDetails.vue";
import SecretMainView from "@/views/SecretMainView.vue";
import StoreView from "@/views/StoreView.vue";

const router = createRouter({
  history: createWebHistory("/"),
  routes: [
    {
      name: "todo",
      path: "/todo",
      component: ToDoView,
    },
    {
      name: "todoDetail",
      path: "/todo/:id",
      component: ToDoDetails,
    },
    {
      name: "main",
      path: "/main",
      component: SecretMainView,
    },
    {
      name: "store",
      path: "/store",
      component: StoreView,
    },
  ],
});

export default router;
