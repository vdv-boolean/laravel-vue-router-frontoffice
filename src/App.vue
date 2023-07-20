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
    <CocktailsList />
</template>

<style lang=scss>
@import 'bootstrap/scss/bootstrap';
</style>
