
<template>
  <div class="container mx-auto">
    <Topbar class="hidemobile" @custom-search="searchs" />
    <MobileTopbar @custom-search="searchs" class="hidedesktop" />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      showSearch: false,
      mydata: "",
    };
  },
  created() {
    this.$nuxt.$on("customSearch", ($event) => this.searchs($event));
  },
  methods: {
    searchs(event) {
      console.log(event);
      this.$router.push({ path: `/search/${event}` });
    },

    test(e) {
      console.log(e);
    },
  },
};
</script>


<style>
* {
  font-family: "Hind", sans-serif;
  box-sizing: border-box;
}
</style>