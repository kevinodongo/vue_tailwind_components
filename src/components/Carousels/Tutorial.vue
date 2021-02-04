<template>
  <div class="tutorial-components-alerts">
    <nav class="bg-gray-900">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative text-white flex items-center justify-between h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <img
                @click="gotohome"
                class="h-10 w-10 mr-3 cursor-pointer"
                src="https://res.cloudinary.com/dk5ch7wqm/image/upload/v1612296046/IMG-20200910-WA0020_ppnudi-removebg-preview_vqozxz.png"
                alt="logo"
              />
            </div>
            <h1 class="font-semibold text-lg text-white">Tailwind and Vue</h1>
            <p class="hidden md:inline font-normal text-coolGray-400 ml-3">
              Components implemented with Tailwind CSS and Vue
            </p>
          </div>
        </div>
      </div>
    </nav>
    <div class="container mx-auto py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          class="bg-gray-100 border border-gray-400 rounded-lg justify-center py-2 px-2 flex items-center w-60"
        >
          <!-- Target -->
          <input
            id="foo"
            class="bg-gray-100  focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-gray-100 rounded-lg"
            value="$ yarn add aos"
          />
          <!-- Trigger -->
          <button
            data-clipboard-target="#foo"
            class="btn py-1 px-1 ml-3 rounded-sm text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-600 focus:ring-white"
          >
            <span class="sr-only">Button Label</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
          </button>
        </div>
        <p class="text-coolGray-500 text-sm mt-1 mb-1">
          We have used AOS package for transition and animation
        </p>

        <div v-if="showalert">
          <div data-aos="zoom-in">
            <div class="bg-green-500 rounded-lg">
              <div class="max-w-7xl mx-auto py-2 px-3 sm:px-6 lg:px-6">
                <div class="flex items-center justify-between flex-wrap">
                  <div class="w-0 flex-1 flex items-center">
                    <span class="flex p-2 rounded-lg ">
                      <!-- Heroicon name: speakerphone -->
                      <svg
                        class="h-6 w-6 text-white"
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
                          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                        />
                      </svg>
                    </span>
                    <p class="ml-3 text-sm font-medium text-white">
                      <span>
                        Aliquam eu nunc. Fusce commodo aliquam arcu. In
                        consectetuer turpis ut velit. Nulla facilisi.. Morbi
                        mollis tellus ac sapien. Fusce vel dui. Praesent ut
                        ligula non mi varius sagittis. Vivamus consectetuer
                        hendrerit lacus. Suspendisse enim turpis, dictum sed,
                        iaculis a, condimentum nec, nisi.
                      </span>
                    </p>
                  </div>
                  <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                    <button
                      @click="showalert = false"
                      type="button"
                      class="-mr-1 flex p-2 rounded-md hover:text-white focus:outline-none sm:-mr-2"
                    >
                      <span class="sr-only">Dismiss</span>
                      <!-- Heroicon name: x -->
                      <svg
                        class="h-6 w-6 text-white"
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
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white border border-gray-250 mt-3 rounded-xl">
          <nav class="border-b-2 border-gray-250  rounded-t-xl">
            <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div class="relative flex items-center justify-between h-16">
                <h1 class="hidden sm:inline text-xl">Sample code</h1>
                <div class="flex">
                  <button
                    @click="
                      showtemplate = false;
                      showscript = false;
                      showpreview = true;
                    "
                    type="button"
                    class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium bg-indigo-100  text-gray-600 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 "
                  >
                    Preview
                  </button>
                  <button
                    @click="
                      showscript = false;
                      showtemplate = true;
                    "
                    type="button"
                    class="ml-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 text-base font-medium bg-white  text-gray-600 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto"
                  >
                    Template
                  </button>
                </div>
              </div>
            </div>
          </nav>
          <div v-if="showtemplate">
            <Htmlsection />
          </div>
          <div v-if="showscript">
            <Scriptsection />
          </div>
          <div v-if="showpreview">
            <Previewsection />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import Htmlsection from "./Sample/Htmlsection";
import Scriptsection from "./Sample/Scriptsection";
import ClipboardJS from "clipboard";
import Previewsection from "./Sample/Previewsection.vue";
export default {
  components: { Htmlsection, Scriptsection, Previewsection },
  data() {
    return {
      showalert: false,
      showpreview: true,
      showtemplate: false,
      showscript: false
    };
  },
  // mounted
  async mounted() {
    window.Prism = window.Prism || {};
    Prism.manual = true;
    Prism.highlightAll();
    new ClipboardJS(".btn");
  },
  methods: {
    // go to home
    gotohome() {
      this.$router.push("/");
    }
  }
};
</script>
