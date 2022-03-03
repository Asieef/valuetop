<template>
  <div class="container mx-auto">
    <div class="text-center">
      <h2 class="text-gray-800 text-2xl mb-12">Computer Casing</h2>
    </div>

    <div
      class="grid lg:grid-flow-col lg:grid-cols-4 grid-cols-1 gap-6 px-6 py-8"
      v-if="products != null"
    >
      <div
        class="
          hover:border hover:border-solid hover:border-gray-300 hover:shadow-lg
        "
        v-for="product in products"
        :key="product.slug"
      >
        <router-link :to="`/product/${product.slug}`">
          <img :src="product.thumbnail" alt="Casing" style="width: 100%" />
          <p class="text-footer-text px-8">{{ product.name }}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      category: "casing",
      cat_id: [20],
    };
  },

  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.$axios
        .get("https://admindash.comcitybd.com/api/brands/Value-Top/4", {
          params: {
            id: this.cat_id,
          },
        })
        .then((response) => {
          console.log(response.data);
          this.products = response.data.data;
        });
    },
  },
};
</script>

