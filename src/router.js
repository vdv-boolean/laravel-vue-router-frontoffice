import { createRouter, createWebHistory } from "vue-router";

// Importiamo i componenti che definiscono le varie pagine
import AppHome from "./pages/AppHome.vue";
import AppAbout from "./pages/AppAbout.vue";
import App404 from "./pages/App404.vue";
import AppCocktail from "./pages/AppCocktail.vue";
import AppMail from "./pages/AppMail.vue";
import AppTeam from "./pages/AppTeam.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: AppHome,
    },
    {
      path: "/cocktails",
      name: "cocktails",
      component: AppCocktail,
    },
    {
      path: "/about",
      name: "about",
      component: AppAbout,
    },
    {
      path: "/mail",
      name: "mail",
      component: AppMail,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "page404",
      component: App404,
    },
    {
      path: "/ourteam",
      name: "ourteam",
      component: AppTeam,
    },
  ],
});

export { router };
