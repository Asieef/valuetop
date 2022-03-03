<template>
  <div class="my-16 mx-8">
    <div class="text-center">
      <h2 class="text-gray-800 text-2xl mb-12">Featured Products</h2>
    </div>
    <div class="grid lg:grid-flow-col lg:grid-cols-2 gap-8 grid-cols-1">
      <div
        style="background-image: url('/casing-big-banner.jpg')"
        class="bg-center bg-cover bg-no-repeat h-[540px] col-span-1"
      >
        <h3 class="p-4 text-xl text-gray-800 tracking-wide">ATX Casing</h3>
        <p class="px-4 py-3 text-sm text-gray-800 tracking-wide">New Casing</p>
      </div>
      <div class="col-span-1">
        <div class="grid grid-flow-row grid-rows-2 gap-8">
          <div
            style="background-image: url('/webcam-big-banner.jpg')"
            class="bg-center bg-cover bg-no-repeat h[480px]"
          >
            <h3 class="p-4 text-xl text-gray-800 tracking-wide">New Product</h3>
            <p class="px-4 py-3 text-sm text-gray-800 tracking-wide">
              VT Webcam
            </p>
          </div>
          <div class="grid grid-flow-col grid-cols-2 gap-8">
            <div
              style="background-image: url('/psu-big-banner.jpg')"
              class="col-span-1 bg-cover bg-no-repeat bg-center h-64"
            >
              <h3 class="p-4 text-xl text-gray-800 tracking-wide">
                Power Supply
              </h3>
              <p class="px-4 py-3 text-sm text-gray-800 tracking-wide">S300</p>
            </div>
            <div
              style="background-image: url('/casing-big-banner-1.jpg')"
              class="col-span-1 bg-cover bg-no-repeat bg-center h-64"
            >
              <h3 class="p-4 text-xl text-gray-800 tracking-wide">
                ATX Casing
              </h3>
              <p class="px-4 py-3 text-sm text-gray-800 tracking-wide">M100</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>