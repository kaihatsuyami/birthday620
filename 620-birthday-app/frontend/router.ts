import { createRouter, createWebHashHistory } from "vue-router";

/**
 * /schedule 配下のルート
 */
const scheduleRoutes = [
  { path: '/schedule',
    name: 'schedule',
    component: () => import('@/pages/schedule/SchedulePage.vue'),
    meta: { title: 'TIME SCHEDULE', backTo: '/dashboard' } },
  { path: '/schedule/gate',
    name: 'schedule-gate',
    component: () => import('@/pages/schedule/ScheduleGatePage.vue'),
    meta: { title: 'TIME SCHEDULE', backTo: '/schedule' } },
  { path: '/schedule/sanrio',
    name: 'schedule-sanrio',
    component: () => import('@/pages/schedule/ScheduleSanrioPage.vue'),
    meta: { title: 'TIME SCHEDULE', backTo: '/dashboard' } },
  { path: '/schedule/asakusa',
    name: 'schedule-asakusa',
    component: () => import('@/pages/schedule/ScheduleAsakusaPage.vue'),
    meta: { title: 'TIME SCHEDULE', backTo: '/dashboard' } },
  { path: '/schedule/aquarium',
    name: 'schedule-aquarium',
    component: () => import('@/pages/schedule/ScheduleAquariumPage.vue'),
    meta: { title: 'TIME SCHEDULE', backTo: '/dashboard' } },
]

/**
 * /ticket 配下のルート
 */
const ticketRoutes = [
  { path: '/ticket',
    name: 'ticket-gate',
    component: () => import('@/pages/ticket/TicketGatePage.vue') },
  { path: '/ticket/transport',
    name: 'ticket-transport',
    component: () => import('@/pages/ticket/TransportSelectPage.vue') },
  { path: '/ticket/weather',
    name: 'ticket-weather',
    component: () => import('@/pages/ticket/WeatherSelectPage.vue') },
  { path: '/ticket/sanrio',
    name: 'ticket-sanrio',
    component: () => import('@/pages/ticket/TicketSanrioPage.vue'),
    meta: { title: 'DAY2 TICKET', backTo: '/dashboard' } },
  { path: '/ticket/asakusa',
    name: 'ticket-asakusa',
    component: () => import('@/pages/ticket/TicketAsakusaPage.vue'),
    meta: { title: 'DAY2 TICKET', backTo: '/dashboard' } },
  { path: '/ticket/aquarium',
    name: 'ticket-aquarium',
    component: () => import('@/pages/ticket/TicketAquariumPage.vue'),
    meta: { title: 'DAY2 TICKET', backTo: '/dashboard' } },
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/',
      redirect: '/gate' },
    // ゲート
    { path: '/gate',
      name: 'gate',
      component: () => import('@/pages/dashboard/DashboardGatePage.vue') },
    // ダッシュボード
    { path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/pages/dashboard/DashboardPage.vue'),
      meta: { requiresAuth: true, title: 'HOME' } },
    // GET READY
    { path: '/getready',
      name: 'getready',
      component: () => import('@/pages/getready/GetreadyPage.vue'),
      meta: { title: 'GET READY', backTo: '/dashboard' } },
    // タイムスケジュール
    ...scheduleRoutes,
    // DAY2 チケット
    ...ticketRoutes,
    // その他
    { path: '/other',
      name: 'other',
      component: () => import('@/pages/other/OtherPage.vue'),
      meta: { title: 'OTHER', backTo: '/dashboard' } },
  ],
});

export default router
