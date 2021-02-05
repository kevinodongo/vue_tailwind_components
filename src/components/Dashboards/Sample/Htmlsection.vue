<template>
  <div class="sample-html" style="background-color: #f5f2f0">
    <div class="text-right">
      <button
        data-clipboard-action="copy"
        data-clipboard-target="#code_content"
        class="btn bg-gray-100 py-2 px-3 ml-3 rounded-lg text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-300 focus:ring-gray-300"
      >
        <span class="sr-only">View notifications</span>
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
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
      </button>
    </div>
    <pre><code id="code_content" class="language-markup"><script type="prism-html-markup">
 <template>
  <!--Sample html alert-->
  <div class="sample-html">
    <div class="container mx-auto py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
      </div>
    </div>
  </div>
 </template> 
    </script></code></pre>
  </div>
</template>

<script>
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import ClipboardJS from "clipboard";
export default {
  data() {
    return {
      //
    };
  },
  // mounted
  async mounted() {
    window.Prism = window.Prism || {};
    Prism.manual = true;
    Prism.highlightAll();
    new ClipboardJS(".btn");
  },
  // methods
  methods: {
    //
  }
};
</script>
