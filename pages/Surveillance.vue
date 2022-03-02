<template>
  <div>
    <div class="spin-container" v-if="loading">
      <div class="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>

    <div id="featured" v-if="products != null">
      <div class="pcard" v-for="product in products" :key="product.slug">
        <router-link :to="`/product/${product.slug}`">
          <img :src="product.thumbnail" alt="Casing" style="width: 100%" />
          <p>{{ product.name }}</p>
        </router-link>
      </div>
    </div>

    <div id="pagination">
      <button @click="previous">Previous Page</button>
      <button @click="next">Next Page</button>
    </div>
  </div>
</template>

<script>
// import VueTailwindPagination from "@ocrv/vue-tailwind-pagination";

export default {
  data() {
    return {
      products: [],
      category: "casing",
      currentPage: 1,
      nextPage: null,
      previousPage: null,
      lastPage: null,
      cat_id: [5],
      loading: false,
    };
  },

  // components: {
  //   VueTailwindPagination,
  // },

  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.loading = true;
      this.$axios
        .get("https://admindash.comcitybd.com/api/brands/Value-Top/12", {
          params: {
            id: this.cat_id,
          },
        })
        .then((response) => {
          this.loading = false;
          console.log(response.data);
          this.products = response.data.data;
          this.nextPage = response.data.next_page_url;
          this.previousPage = response.data.prev_page_url;
          this.lastPage = response.data.last_page;
        });
    },

    next() {
      this.$axios
        .get(this.nextPage, {
          params: {
            id: this.cat_id,
          },
        })
        .then((response) => {
          console.log(response.data);
          this.products = response.data.data;
          this.nextPage = response.data.next_page_url;
          this.previousPage = response.data.prev_page_url;
        });
    },

    previous() {
      this.$axios
        .get(this.previousPage, {
          params: {
            id: this.cat_id,
          },
        })
        .then((response) => {
          console.log(response.data);
          this.products = response.data.data;
          this.nextPage = response.data.next_page_url;
          this.previousPage = response.data.prev_page_url;
        });
    },
    // pageChange(pageNumber) {
    //   this.currentPage = pageNumber;
    // },
  },
};
</script>

<style>
#pagination {
  display: flex;
  justify-content: center;
  column-gap: 20px;
}
</style>