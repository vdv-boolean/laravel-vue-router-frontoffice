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
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,300;0,500;1,400&display=swap');

* {
    font-family: 'Montserrat', sans-serif;
}
</style>
