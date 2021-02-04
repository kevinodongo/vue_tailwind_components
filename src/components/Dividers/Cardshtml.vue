<template>
  <div class="alert-html">
    <div class="text-right">
      <button
        data-clipboard-action="copy"
        data-clipboard-target="#code_content"
        class="btn bg-gray-100 py-2 px-4 ml-3 rounded-lg text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
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
      <!-- Types of Cards -->
      <div class="grid grid-cols-6 gap-x-2">
        <div class="shadow-sm h-48 w-48 bg-white"></div>
        <div class="shadow h-48 w-48 bg-white"></div>
        <div class="shadow-md h-48 w-48 bg-white"></div>
        <div class="shadow-lg h-48 w-48 bg-white"></div>
        <div class="shadow-xl h-48 w-48 bg-white"></div>
        <div class="shadow-2xl h-48 w-48 bg-white"></div>
      </div>

      <div class="grid grid-cols-6 gap-x-2">
        <div class="rounded-md shadow-sm h-48 w-48 bg-white"></div>
        <div class="rounded-lg shadow h-48 w-48 bg-white"></div>
        <div class="rounded-xl shadow-md h-48 w-48 bg-white"></div>
        <div class="rounded-2xl shadow-lg h-48 w-48 bg-white"></div>
        <div class="rounded-3xl shadow-xl h-48 w-48 bg-white"></div>
        <div class="rounded-full shadow-2xl h-48 w-48 bg-white"></div>
      </div>

      <div class="grid grid-cols-6 gap-x-2">
        <div class="hover:bg-purple-200 shadow-sm h-48 w-48 bg-white"></div>
        <div class="hover:bg-purple-300  shadow h-48 w-48 bg-white"></div>
        <div class="hover:bg-purple-400  shadow-md h-48 w-48 bg-white"></div>
        <div class="hover:bg-purple-500  shadow-lg h-48 w-48 bg-white"></div>
        <div class="hover:bg-purple-600  shadow-xl h-48 w-48 bg-white"></div>
        <div class="hover:bg-purple-700  shadow-2xl h-48 w-48 bg-white"></div>
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
