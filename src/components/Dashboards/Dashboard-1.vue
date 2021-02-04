<template>
  <div class="layout-one container">
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="fixed inset-0 overflow-hidden">
      <div class="absolute inset-0 overflow-hidden">
        <div
          class="absolute inset-0 bg-gray-100 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        >
          <!--Header-->
          <nav class="bg-gray-800">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div class="flex items-center justify-between h-16">
                <div class="flex items-center">
                  <div class="block">
                    <div class="flex items-baseline space-x-4">
                      <button
                        @click="drawer = !drawer"
                        class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                      >
                        <span class="sr-only">Open main menu</span>
                        <svg
                          class="block h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <!--/end-->
        </div>
        <!--Navigation-->
        <section
          v-if="drawer"
          class="absolute inset-y-0 right-0 pl-10 max-w-full flex"
          aria-labelledby="slide-over-heading"
        >
          <div class="relative w-screen max-w-md">
            <div
              class="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll"
            >
              <div class="px-4 sm:px-6">
                <button
                  @click="drawer = false"
                  class="rounded-md text-gray-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <span class="sr-only">Close panel</span>
                  <!-- Heroicon name: x -->
                  <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div class="mt-6 relative flex-1 px-4 sm:px-6">
                <!-- Replace with your content -->
                <div class="absolute inset-0 px-4 sm:px-6">
                  <div
                    class="h-full border-2 border-dashed border-gray-200"
                    aria-hidden="true"
                  ></div>
                </div>
                <!-- /End replace -->
              </div>
            </div>
          </div>
        </section>
        <!--/end-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false
    };
  }
};
</script>
