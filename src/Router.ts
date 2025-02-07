import { createWebHistory, createRouter } from "vue-router";

import HomePage from "./views/HomePage/HomePage.vue";
import AboutUsPage from "./views/AboutUsPage/AboutUsPage.vue";
import BlogPage from "./views/BlogPage/BlogPage.vue";
import ContactPage from "./views/ContactPage/ContactPage.vue";
import ProgramsPage from "./views/ProgramsPage/ProgramsPage.vue";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/about",
    component: AboutUsPage,
  },
  {
    path: "/programs",
    component: ProgramsPage,
  },
  {
    path: "/blog",
    component: BlogPage,
  },
  {
    path: "/contact",
    component: ContactPage,
  },
];

const router: any = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
