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

    <div
      class="grid lg:grid-cols-4 gap-6 grid-cols-2 px-8 justify-items-center"
    >
      <div class="col-span-1">
        <button
          @click="selectTab(1)"
          :class="{ tabstate: currentTab == 1 }"
          class="px-4 py-2"
        >
          Description
        </button>
      </div>

      <div class="col-span-1">
        <button
          @click="selectTab(2)"
          :class="{ tabstate: currentTab == 2 }"
          class="px-4 py-2"
        >
          Specification
        </button>
      </div>
      <template v-if="product.datasheet">
        <div class="col-span-1" v-if="product.datasheet.length">
          <button
            @click="selectTab(3)"
            :class="{ tabstate: currentTab == 3 }"
            class="px-4 py-2"
          >
            Downloads
          </button>
        </div>
      </template>

      <div class="col-span-1">
        <button
          @click="selectTab(4)"
          :class="{ tabstate: currentTab == 4 }"
          class="px-4 py-2"
        >
          Video
        </button>
      </div>
    </div>

    <div class="px-6 lg:py-10 py-4s">
      <div v-if="currentTab == 1" class="px-6 lg:py-10 py-4">
        <div class="" v-html="product.details"></div>
      </div>

      <div v-if="currentTab == 2" class="px-6 lg:py-10 py-4">
        <div class="" v-html="product.short"></div>
      </div>

      <template v-if="product.datasheet">
        <div v-if="currentTab == 3" class="px-6 lg:py-10 py-4">
          <div v-for="datasheet in product.datasheet" :key="datasheet.id">
            <a :href="datasheet.src" target="_blank">
              {{ datasheet.src.substring(63) }}
            </a>
          </div>
        </div>
      </template>

      <div v-if="currentTab == 4" class="px-6 lg:py-10 py-4">
        <div class="aspect-w-16 aspect-h-9">
          <iframe
            :src="
              'https://www.youtube.com/embed/' +
              product.youtube.replace('https://www.youtube.com/watch?v=', '')
            "
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
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
}

.pinfo {
  padding: 8rem 4rem;
}

.ptabs {
  display: grid;
  grid-template-columns: ;
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

. px-6 lg:py-10 py-4s {
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
