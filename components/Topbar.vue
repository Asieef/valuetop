<template>
  <div>
    <header class="text-gray-600 body-font">
      <div class="uppercase flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav class="flex lg:w-2/5 flex-wrap items-center md:ml-auto text-xs">
          <nuxt-link
            :to="menu.url"
            v-for="menu in menus"
            :key="menu.id"
            class="mr-5 hover:text-gray-900"
          >{{ menu.name }}</nuxt-link>
        </nav>
        <NuxtLink
          to="/"
          class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0"
        >
          <img class="flex justify-center h-12 w-16 mt-2" src="/logo-one.png" alt="VT Logo" />
        </NuxtLink>
        <div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          <ul class="text-left mx-[14px] p-[0px] flex">
            <li class="px-4">
              <form class="inline" @submit.prevent="$nuxt.$emit('customSearch', query)">
                <input
                  class="border-2 rounded p-1"
                  type="text"
                  placeholder="Search.."
                  v-model="query"
                />
                <button type="submit">
                  <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                </button>
              </form>
            </li>
            <li class="inline px-4 mt-2">
              <font-awesome-icon icon="fa-solid fa-user" />
            </li>
            <li class="inline px-4 mt-2">
              <font-awesome-icon icon="shopping-bag" />
            </li>
          </ul>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  emits: [],
  data() {
    return {
      query: "",
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
  // methods: {
  //   async getData() {
  //     console.log(this.query);
  //     this.$emit("search", this.query);
  //     this.$router.push({ name: "Search", query: { query: this.query } });
  //     emitter.emit("search", this.query);
  //   },
  // },
};
</script>