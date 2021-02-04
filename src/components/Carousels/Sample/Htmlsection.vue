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
  <!-- Option 1 -->
      <carousel :perPage="1">
        <slide>
          <img
            style="height: 600px"
            class="object-cover w-full"
            src="/alley-89197_640.jpg"
            alt="carousel image"
          />
        </slide>
        <slide>
          <img
            style="height: 600px"
            class="object-cover w-full"
            src="/lighthouse-5622924_640.jpg"
            alt="carousel image"
          />
        </slide>
        <slide>
          <img
            style="height: 600px"
            class="object-cover w-full"
            src="/tower-bridge-5762070_640.jpg"
            alt="carousel image"
          />
        </slide>
      </carousel>
      <!-- Option 2 -->
      <carousel :perPage="1" :navigationEnabled="true">
        <slide>
          <img
            style="height: 600px"
            class="object-cover w-full"
            src="/laptop-2620118_640.jpg"
            alt="carousel image"
          />
        </slide>
        <slide>
          <img
            style="height: 600px"
            class="object-cover w-full"
            src="/laptop-5842509_640.jpg"
            alt="carousel image"
          />
        </slide>
         <slide>
          <img
            style="height: 600px"
            class="object-cover w-full"
            src="/code-1839406_640.jpg"
            alt="carousel image"
          />
        </slide>
      </carousel>
      <!-- Option 3 -->
      <carousel :perPage="1" :autoplay="true">
        <slide>
          <img
            style="height: 600px"
            class="object-cover w-full"
            src="/home-5835289_640.jpg"
            alt="carousel image"
          />
        </slide>
        <slide>
          <img
            style="height: 600px"
            class="object-cover w-full"
            src="/workout-5914643_640.jpg"
            alt="carousel image"
          />
        </slide>
        <slide>
          <img
            style="height: 600px"
            class="object-cover w-full"
            src="/buildings-5795560_640.jpg"
            alt="carousel image"
          />
        </slide>
      </carousel>
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