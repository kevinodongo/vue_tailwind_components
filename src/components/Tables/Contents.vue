<template>
  <div class="Tables">
    <div class="mt-20">
      <div class="hidden sm:inline">
        <div class="flex  items-center">
          <span class="text-gray-500 font-medium antialiased">Components</span>
          <button
            class="ml-2 rounded-full text-gray-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          >
            <span class="sr-only">Button Label</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="h-4 w-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20 12H4"
              />
            </svg>
          </button>
          <span class="ml-2 antialiased">Tables</span>
        </div>
      </div>
    </div>
    <div class="flex justify-between items-center">
      <h2
        class="text-2xl font-semibold text-coolGray-900 tracking-wide antialiased"
      >
        Tables
      </h2>
      <button
        @click="gototutorials"
        class="hidden sm:inline hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
      >
        <div class="flex items-center text-yellow-500 font-bold antialiased">
          <span class="mb-2 mr-2">See how to implement</span>
          <span class="sr-only">Button Label</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="h-4 w-4"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </button>
    </div>
    <div class="sm:hidden">
      <button @click="gototutorials">
        <div class="flex items-center text-yellow-500 font-bold antialiased">
          <span class="mb-2 mr-2">See how to implement</span>
          <span class="sr-only">Button Label</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="h-4 w-4"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </button>
    </div>
    <div class="bg-white border border-gray-250 mt-3 rounded-xl">
      <nav class="border-b-2 border-gray-250  rounded-t-xl">
        <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div class="relative flex items-center justify-between h-16">
            <h1 class="hidden sm:inline text-xl">Groups of Tables</h1>
            <div class="flex">
              <button
                @click="
                  showcode = false;
                  showpreview = true;
                "
                type="button"
                class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium bg-indigo-100  text-gray-600 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 "
              >
                Preview
              </button>
              <button
                @click="
                  showpreview = false;
                  showcode = true;
                "
                type="button"
                class="ml-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 text-base font-medium bg-white  text-gray-600 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto"
              >
                Code
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div v-if="showpreview">
        <Tablepreview />
      </div>
      <div v-if="showcode">
        <Tablecode />
      </div>
    </div>
  </div>
</template>

<script>
import Tablepreview from "./Tablescode"; // normal code
import Tablecode from "./Tableshtml"; // html
export default {
  name: "Tables",
  components: { Tablecode, Tablepreview },
  data() {
    return {
      showpreview: true,
      showcode: false
    };
  },
  methods: {
    // go to tutorials
    gototutorials() {
      this.$router.push("/tutorials/components/Tables");
    }
  }
};
</script>
