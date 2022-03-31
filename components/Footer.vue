<template>
  <div class="grid grid-flow-row bg-bg-footer text-footer-text">
    <div class="grid lg:grid-flow-col lg:grid-cols-4 px-8 py-12 grid-cols-1 gap-4">
      <div class="col-span-1">
        <img src="/logo-two.png" class="h-16" />
      </div>
      <div class="col-span-1">
        <ul>
          <li class="p-2 text-white">Services</li>
          <li class="text-xm p-2">
            <NuxtLink to="/blog" class="hover:text-white">Blog</NuxtLink>
          </li>
          <li class="text-xm p-2">
            <NuxtLink to="/about" class="hover:text-white">About</NuxtLink>
          </li>
          <li class="text-xm p-2">
            <NuxtLink to="/support" class="hover:text-white">Support</NuxtLink>
          </li>
          <li class="text-xm p-2">
            <NuxtLink to="/terms" class="hover:text-white">Privacy Policy</NuxtLink>
          </li>
        </ul>
      </div>

      <div class="col-span-1">
        <ul>
          <li class="p-2 text-white">Company</li>
          <li class="text-xm p-2">
            <NuxtLink to="/whatwedo" class="hover:text-white">What We Do</NuxtLink>
          </li>
          <li class="text-xm p-2">
            <NuxtLink to="/faq" class="hover:text-white">FAQs</NuxtLink>
          </li>
          <li class="text-xm p-2">
            <NuxtLink to="/latestpost" class="hover:text-white">Latest Posts</NuxtLink>
          </li>
          <li class="text-xm p-2">
            <NuxtLink to="/contact" class="hover:text-white">Contact</NuxtLink>
          </li>
        </ul>
      </div>

      <!-- Form Section -->
      <div class="col-span-1">
        <ul>
          <li class="py-2 text-white">Newsletter</li>
          <p class="text-xm mb-4">Join Newsletter & Get Latest Update</p>
          <div class="col-span-4 lg:flex items-center">
            <form method="post" @submit.prevent="sendMail">
              <input
                v-model="honeyPot"
                type="checkbox"
                style="display:none"
                name="honeyPot"
                tabindex="-1"
                autocomplete="off"
              />

              <div class="flex">
                <div class>
                  <input
                    required
                    v-model="email"
                    type="email"
                    id="email"
                    name="email"
                    class="bg-white border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-xm outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>

                <div class="flex">
                  <button
                    class="text-white bg-black hover:bg-gray-700 px-4 focus:outline-none text-xs uppercase items-center font-medium"
                  >Submit</button>
                </div>
              </div>
            </form>
          </div>
        </ul>
      </div>
    </div>

    <!-- Alert Section -->

    <div
      id="alert-1"
      class="flex w-full p-4 mb-4 bg-blue-100 rounded-lg dark:bg-blue-200"
      role="alert"
      v-if="showThanks"
    >
      <svg
        class="flex-shrink-0 w-5 h-5 text-blue-700 dark:text-blue-800"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clip-rule="evenodd"
        />
      </svg>
      <div
        class="ml-3 text-sm font-medium text-blue-700 dark:text-blue-800"
      >Your Email Address has been submitted</div>
      <button
        @click="toggleThanks"
        type="button"
        class="ml-auto -mx-1.5 -my-1.5 bg-blue-100 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 inline-flex h-8 w-8 dark:bg-blue-200 dark:text-blue-600 dark:hover:bg-blue-300"
        data-collapse-toggle="alert-1"
        aria-label="Close"
      >
        <span class="sr-only">Close</span>
        <svg
          class="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>

    <div
      class="text-footer-text p-8 grid lg:grid-flow-col lg:grid-cols-2 grid-cols-1 border-t border-white"
    >
      <div class="col-span-1 flex items-center gap-3">
        <div>
          <p class>Follow Our Social :</p>
        </div>
        <div>
          <a href="https://www.facebook.com/valuetop.cctl">
            <img src="/fb-social.svg" class="h-6" />
          </a>
        </div>
      </div>

      <div class="col-span-1 lg:text-right">
        <p class>© Copyright 2022 Value-Top</p>
      </div>
    </div>
  </div>
</template>
 

 <script>

export default {
  data() {
    return {
      email: null,
      honeyPot: false,
      showThanks: false
    }
  },

  methods: {
    sendMail() {
      this.$axios.post('https://submit-form.com/eNqzBhtY', {
        email: this.email,
        _honeypot: this.honeyPot
      }).then((response) => {
        console.log(response.data);
        this.showThanks = true;
      });
    },

    toggleThanks() {
      this.showThanks = !this.showThanks
    }
  }
}

</script>