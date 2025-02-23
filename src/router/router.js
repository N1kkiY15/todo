import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory("/"),
  routes: [
    {
      name: "todo",
      path: "/todo",
      component: () => import("@/views/ToDoView.vue"),
      children: [
        {
          name: "todocard",
          path: ":id",
          component: () => import("@/views/ToDoDetails.vue"),
        },
      ],
    },
    {
      name: "main",
      path: "/main",
      component: () => import("@/views/SecretMainView.vue"),
    },
  ],
});

export default router;
