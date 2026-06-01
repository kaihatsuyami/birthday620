import { createRouter, createWebHistory } from "vue-router";

import GatePage from "@/dashboard/DashboardGatePage.vue";
import DashboardPage from "@/dashboard/DashboardPage.vue";
import GetreadyPage from "@/getready/GetreadyPage.vue"
import SchedulePage from "@/schedule/SchedulePage.vue"
import TicketPage from "@/ticket/Day2TicketPage.vue"
import OtherPage from "@/other/OtherPage.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/gate",
    },
    {
      path: "/gate",
      name: "gate",
      component: GatePage,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: DashboardPage,
      meta: { requiresAuth: true },
    },
    {
      path:"/getready",
      name:"getready",
      component: GetreadyPage,
    },
    {
      path:"/schedule",
      name:"schedule",
      component: SchedulePage,
    },
    {
      path:"/ticket",
      name:"ticket",
      component: TicketPage,
    },
    {
      path:"/other",
      name:"other",
      component: OtherPage,
    }
  ],
});

export default router