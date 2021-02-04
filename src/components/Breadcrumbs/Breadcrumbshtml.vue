<template>
  <div class="breadcrumbs-html">
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
      <!-- Types of Breadcrumbs -->

      <!-- Option 1 -->
      <div class="flex items-center">
        <span class="text-lg mr-2 text-indigo-600 font-medium">Dashboard</span>
        /
        <span class="text-lg ml-2 mr-2 text-indigo-600 font-normal"
          >Link-1</span
        >
        /
        <span class="text-md ml-2 text-coolGray-500 font-normal">Link-2</span>
      </div>
      <!-- Option 2 -->
      <div class="flex items-center">
        <span class="text-lg text-indigo-600 font-medium">Dashboard</span>
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
        <span class="text-lg ml-2 text-indigo-600 font-normal">Link-1</span>
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
        <span class="text-md ml-2 text-coolGray-500 font-normal">Link-2</span>
      </div>
      <!-- Option 3 -->
      <div class="flex items-center">
        <span class="text-lg text-indigo-600 font-medium">Dashboard</span>
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
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
        <span class="text-lg ml-2 text-indigo-600 font-normal">Link-1</span>
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
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
        <span class="text-md ml-2 text-coolGray-500 font-normal">Link-2</span>
      </div>
      <!-- Option 4 -->
      <div class="flex items-center">
        <span class="text-lg text-indigo-600 font-medium">Dashboard</span>
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
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
        <span class="text-lg ml-2 text-indigo-600 font-normal">Link-1</span>
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
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
        <span class="text-md ml-2 text-coolGray-500 font-normal">Link-2</span>
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
