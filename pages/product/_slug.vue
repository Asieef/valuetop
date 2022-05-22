<template>
  <div>
    <div class="spin-container" v-if="loading">
      <div class="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>

    <div class="bread">
      <p>/</p>
    </div>
    <div class="pdetails">
      <div class="placeholder">
        <img :src="product.photo" :alt="product.name" style="width: 100%" />
      </div>
      <div class="pinfo">
        <h3>
          {{ product.name }}
        </h3>
        <p><strong>Brand : </strong>{{ product.brands }}</p>
        <br />
        <div class="pshorts" v-html="product.short"></div>
        <div class="mt-8">
          <a
            :href="`https://comcitybd.com/product/${slug}`"
            class="bg-[#ff4850] text-white px-6 py-3 hover:bg-gray-700"
            target="_blank"
          >
            Buy Now
          </a>
        </div>
      </div>
    </div>

    <div class="ptabs">
      <div class="ptab">
        <button
          @click="selectTab(1)"
          :class="{ tabstate: currentTab == 1 }"
          class="tab"
        >
          Description
        </button>
      </div>

      <div class="ptab">
        <button
          @click="selectTab(2)"
          :class="{ tabstate: currentTab == 2 }"
          class="tab"
        >
          Specification
        </button>
      </div>
    </div>

    <div class="tabpanels">
      <div v-if="currentTab == 1" class="tabpanel">
        <div class="pshorts" v-html="product.details"></div>
      </div>

      <div v-if="currentTab == 2" class="tabpanel">
        <div class="pshorts" v-html="product.short"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: String,
  },

  data() {
    return {
      product: [],
      slug: this.$route.params.slug,
      currentTab: 1,
      loading: false,
    };
  },

  head() {
    return {
      title: `Value-Top | ${this.slug}`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Home page description",
        },
      ],
    };
  },

  mounted() {
    this.getProduct();
    console.log(this.slug);
  },

  methods: {
    getProduct() {
      this.loading = true;
      this.$axios
        .get(`https://admindash.comcitybd.com/api/product/${this.slug}`)
        .then((response) => {
          this.loading = false;
          console.log(response.data);
          this.product = response.data;
        });
    },

    selectTab(selectedTab) {
      this.currentTab = selectedTab;
    },
  },
};
</script>

<style>
.bread p {
  background-color: #f4f4f4;
  padding: 1rem;
}

.pdetails {
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  border-bottom: 1px solid #bbb;
}

.pinfo {
  padding: 8rem 4rem;
}

.ptabs {
  display: flex;
  justify-content: center;
  gap: 3rem;
  padding-top: 4rem;
}

.tab {
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 16px;
  background: none;
  color: inherit;
  border: none;
  cursor: pointer;
  outline: inherit;
}

/* .tab:hover {
  border-bottom: 1px solid #ff4850;
} */

.tabstate {
  border-bottom: 2px solid #ff4850;
}

.tabpanels {
  padding: 4rem;
}

@media (max-width: 768px) {
  .pdetails {
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }

  .pinfo {
    padding: 1.2rem 0;
  }

  .pcard p {
    padding: 1rem;
  }

  .pshorts img {
    max-width: 100%;
  }

  #featured {
    padding: 1rem 2rem;
  }
}
</style>
