
<template>
  <div>
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

  head: {
    title: 'Value-Top | Value You Can Trust',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Manufacturer of Computer & Surveillance Accessories'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  }


}
</script>


<style>
* {
  font-family: "Hind", sans-serif;
  box-sizing: border-box;
}
</style>