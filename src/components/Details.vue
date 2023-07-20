<script>
import axios from "axios";

export default {
  name: "Details",
  props: {
		id: String,
	},
  data() {
    return {
        arrDetails: [],
    };
  },
  methods: {
    getDetails() {
      axios
        .get("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=", {
          params: {
            i: this.id,
          },
        }) // api link
        .then((response) => {
          this.arrDetails = response.data.drinks;
          console.log(arrDetails)
        });
    },
  },
  watch: {
    currentPage() {
      this.getDetails();
    },
  },
  created() {
    this.getDetails();
  },
};
</script>

<template>

    <span> {{ id.strDrink }}</span>

</template>

<style lang="scss" scoped>

</style>