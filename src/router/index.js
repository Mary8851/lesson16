import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
// import MoviesPage from "../views/MoviesPage.vue";
// import MoviesInfo from "../views/MoviesInfo.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  // {
  //   path: "/movies",
  //   name: "movies",
  //   component: MoviesPage,
  // },
  // {
  //   path: "/movies/:id",
  //   name: "movies-info",
  //   component: MoviesInfo,
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
