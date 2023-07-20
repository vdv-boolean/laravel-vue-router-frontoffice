<script>
import AppNav from './components/AppNav.vue';
import CocktailsList from './components/CocktailsList.vue';
export default {
    components: {
        AppNav,
        CocktailsList,
    }
}

</script>

<template>
    <AppNav />
    <router-view></router-view>
</template>

<style lang=scss>
@import 'bootstrap/scss/bootstrap';
</style>
