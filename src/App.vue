<script>
import AppNav from "./components/AppNav.vue";
import CocktailsList from "./components/CocktailsList.vue";
import AppFooter from "./components/AppFooter.vue";
export default {
  components: {
    AppNav,
    CocktailsList,
    AppFooter,
  },
};
</script>

<template>
  <AppNav />
  <router-view></router-view>
  <AppFooter />
</template>

<style lang="scss">
@import "bootstrap/scss/bootstrap";
</style>
