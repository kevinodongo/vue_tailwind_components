import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  // tutorial
  {
    path: "/tutorials/components/alerts",
    name: "AlertsTutorial",
    component: () => import("../components/Alerts/Tutorial.vue")
  },
  {
    path: "/tutorials/components/paginations",
    name: "PaginationTutorial",
    component: () => import("../components/Paginations/Tutorial.vue")
  },
  {
    path: "/tutorials/components/calendars",
    name: "CalendarsTutorial",
    component: () => import("../components/Calendars/Tutorial.vue")
  },
  {
    path: "/tutorials/components/carousels",
    name: "CarouselsTutorial",
    component: () => import("../components/Carousels/Tutorial.vue")
  },
  {
    path: "/tutorials/components/tables",
    name: "TablesTutorial",
    component: () => import("../components/Tables/Tutorial.vue")
  },
  {
    path: "/tutorials/components/bars",
    name: "BarsTutorial",
    component: () => import("../components/Bars/Tutorial.vue")
  },
];

export default routes;
