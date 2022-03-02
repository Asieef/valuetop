<template>
  <div>
    <div
      class="
        bg-gray-300
        text-black
        grid grid-flow-col grid-cols-6
        py-4
        px-6
        justify-items-center
      "
    >
      <div class="col-span-1" @click="showMenu">
        <img src="/ham.png" alt="VT Logo" class="h-8" />
      </div>

      <div class="col-span-4">
        <form @submit.prevent="$nuxt.$emit('customSearch', query)">
          <input
            type="text"
            placeholder="Search.."
            class="border border-solid border-gray-400 bg-gray-100 px-1 shadow"
            v-model="query"
          />
          <button type="submit">
            <font-awesome-icon icon="search" />
          </button>
        </form>
      </div>
      <div class="col-span-1">
        <a href="http://localhost:3000/">
          <img src="/logo-one.png" alt="VT Logo" class="h-8"
        /></a>
      </div>
    </div>

    <div class="px-3 absolute top-16 w-full bg-bg-footer" v-show="isHidden">
      <ul class="px-2 shadow-md text-footer-text text-lg">
        <li
          class="p-1 border-b border-gray-600 hover:text-white"
          v-for="menu in menus"
          :key="menu.id"
        >
          <router-link :to="menu.url">{{ menu.name }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
export default {
  emits: [],
  data() {
    return {
      isHidden: false,
      query: null,
      data: [],
      menus: [
        {
          name: "Home",
          url: "/",
        },
        {
          name: "Casing",
          url: "/casing",
        },
        {
          name: "Power Supply",
          url: "/powersupply",
        },
        {
          name: "Accessories",
          url: "/accessories",
        },
        {
          name: "Surveillance",
          url: "/surveillance",
        },
      ],
    };
  },

  methods: {
    showMenu() {
      this.isHidden = !this.isHidden;
    },
  },
};
</script>