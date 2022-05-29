<template>
  <div>
    <div class="spin-container" v-if="loading">
      <div class="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>

    <div
      class="p-8 grid lg:grid-cols-4 gap-8 grid-cols-1 container mx-auto"
      v-if="products != null"
    >
      <div v-for="product in products" :key="product.slug">
        <router-link :to="`/product/${product.slug}`">
          <div class="col-span-1">
            <img :src="product.thumbnail" alt="Casing" style="width: 100%" />
            <p class="truncate">{{ product.name }}</p>
          </div>
        </router-link>
      </div>
    </div>

    <div id="pagination">
      <button :disabled="!previousPage" @click="previous">Previous Page</button>
      <button :disabled="!nextPage" @click="next">Next Page</button>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: "Value-Top | Casing",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
  },

  data() {
    return {
      products: [],
      category: "casing",
      currentPage: 1,
      nextPage: null,
      previousPage: null,
      lastPage: null,
      cat_id: [20],
      loading: false,
    };
  },

  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.loading = true;
      this.$axios
        .get("https://admindash.comcitybd.com/api/brands/Value-Top/60", {
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
  padding: 2rem;
}

#pagination button {
  text-transform: uppercase;
  letter-spacing: 1.3px;
  font-size: 12px;
  font-weight: 600;
  padding: 16px;
  color: white;
  background-color: black;
  cursor: pointer;
}

#pagination button:hover {
  color: white;
  background-color: #888;
}

.pcard img {
  max-width: 256px;
}
</style>
