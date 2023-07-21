import { createRouter, createWebHistory } from "vue-router";

// Importiamo i componenti che definiscono le varie pagine
import AppHome from "./pages/AppHome.vue";
import AppAbout from "./pages/AppAbout.vue";
import App404 from "./pages/App404.vue";
import CocktailsList from "./components/CocktailsList.vue";
import AppMail from "./pages/AppMail.vue";

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
      component: CocktailsList,
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
  ],
});

export { router };
