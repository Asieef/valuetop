<template>
  <div>
    <div class="text-black grid grid-flow-col grid-cols-6 py-6 px-6 justify-items-center">
      <div class="col-span-1" @click="showMenu">
        <img src="/ham.png" alt="VT Logo" class="h-8" />
      </div>

      <div class="col-span-4">
        <form @submit.prevent="$nuxt.$emit('customSearch', query)">
          <input
            type="text"
            placeholder="Search.."
            class="border border-solid border-gray-400 bg-gray-100 px-1 shadow w-40"
            v-model="query"
          />
          <button type="submit" class="px-2">
            <font-awesome-icon icon="search" />
          </button>
        </form>
      </div>
      <div class="col-span-1">
        <NuxtLink to="/">
          <img src="/logo-one.png" class="h-8" />
        </NuxtLink>
      </div>
    </div>

    <div class="px-3 absolute top-16 w-full bg-bg-footer z-10" v-show="isHidden">
      <ul class="px-2 shadow-md text-gray-100 text-sm">
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