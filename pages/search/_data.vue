<template>
  <div>
    <h3>Search Result For "{{ query }}"</h3>

    <div id="featured" v-if="products != null">
      <div class="pcard" v-for="product in products" :key="product.slug">
        <router-link :to="`/product/${product.slug}`">
          <img :src="product.thumbnail" alt="Casing" style="width: 100%" />
          <p>{{ product.name }}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: this.$route.params.data,
      products: [],
    };
  },

  watch: {
    "$route.params.data"(newSlug) {
      this.getData(newSlug);
    },
  },

  mounted() {
    this.getData(this.query);
  },

  methods: {
    getData(newSlug) {
      this.query = newSlug;
      this.$axios
        .get(
          `https://admindash.comcitybd.com/api/customsearch/Value-Top/${this.query}?page=1`
        )
        .then((response) => {
          console.log(response.data);
          this.products = response.data.data;
        });
    },
  },
};
</script>