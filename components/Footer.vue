<template>
  <div class="grid grid-flow-row bg-bg-footer text-footer-text">
    <div class="grid lg:grid-flow-col lg:grid-cols-4 px-8 py-12 grid-cols-1 gap-4">
      <div class="col-span-1">
        <img src="/logo-two.png" class="h-16" />
      </div>
      <div class="col-span-1">
        <ul>
          <li class="text-xl p-2 text-white">Services</li>
          <li class="text-base p-2">
            <NuxtLink to="/blog">Blog</NuxtLink>
          </li>
          <li class="text-base p-2">
            <NuxtLink to="/about">About</NuxtLink>
          </li>
          <li class="text-base p-2">
            <NuxtLink to="/support">Support</NuxtLink>
          </li>
          <li class="text-base p-2">
            <NuxtLink to="/terms">Privacy Policy</NuxtLink>
          </li>
        </ul>
      </div>

      <div class="col-span-1">
        <ul>
          <li class="text-xl p-2 text-white">Company</li>
          <li class="text-base p-2">
            <NuxtLink to="/whatwedo">What We Do</NuxtLink>
          </li>
          <li class="text-base p-2">
            <NuxtLink to="/faq">FAQs</NuxtLink>
          </li>
          <li class="text-base p-2">
            <NuxtLink to="/latestpost">Latest Posts</NuxtLink>
          </li>
          <li class="text-base p-2">
            <NuxtLink to="/contact">Contact</NuxtLink>
          </li>
        </ul>
      </div>

      <div class="col-span-1">
        <ul>
          <li class="text-xl py-2 text-white">Newsletter</li>
          <p class="text-base">Join Newsletter & Get Latest Update</p>
          <input type="text" class="my-4 w-40 py-2" />
          <span class="bg-black px-4 h-18 py-[12px] hover:bg-gray-800 text-white">
            <button class="uppercase text-xs">Subscribe</button>
          </span>
        </ul>
      </div>
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
 