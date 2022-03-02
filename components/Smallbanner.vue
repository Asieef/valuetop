<template>
  <div>
    <div
      class="
        grid
        lg:grid-cols-3 lg:grid-flow-col
        text-center
        px-8
        py-0
        grid-cols-1
      "
    >
      <div class="py-0 px-4">
        <a :href="urlFan">
          <img src="/fan-banner.jpg" alt="Banner" />
        </a>
      </div>
      <div class="py-0 px-4">
        <a href="#">
          <img src="/keyboard-banner.jpg" alt="Banner" />
        </a>
      </div>
      <div class="py-0 px-4">
        <a href="#">
          <img src="/vs-banner.jpg" alt="Banner" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      urlFan:
        "http://localhost:8080/#/product/value-top-vt-1256-static-cooler-fan",
    };
  },

  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.$axios
        .get("https://admindash.comcitybd.com/api/brands/Value-Top/12", {
          params: {
            id: this.cat_id,
          },
        })
        .then((response) => {
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