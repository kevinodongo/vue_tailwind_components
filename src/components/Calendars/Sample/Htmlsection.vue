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
  <!-- Dialog -->
    <div v-if="dialog" class="fixed z-10 inset-0 overflow-y-auto">
      <div
        class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      >
        <div class="fixed inset-0 transition-opacity" aria-hidden="true">
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
          >&#8203;</span
        >
        <div
          class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div
                class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 sm:mx-0 sm:h-10 sm:w-10"
              >
                <!-- Heroicon name: exclamation -->
                <svg
                  class="h-6 w-6 text-indigo-600"
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
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  class="text-lg leading-6 font-medium text-gray-900"
                  id="modal-headline"
                >
                  Calendar
                </h3>
                <div class="mt-2 flex justify-center">
                  <v-calendar is-expanded></v-calendar>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Save date
            </button>
            <button
              @click="dialog = false"
              type="button"
              class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="grid mt-4 grid-cols-1 justify-center">
      <!-- Option 1 -->
      <div class="justify-center flex flex-col">
        <div class="flex justify-center mb-2">
          <input
            v-model="date"
            class="placeholder-gray-500 border border-gray-400 px-4 rounded-lg py-2"
            placeholder="Select date"
          />
        </div>
        <div class="flex justify-center">
          <v-date-picker v-model="date" />
        </div>
      </div>
      <!-- Option 2 -->
      <div class="flex justify-center">
        <button
          @click="dialog = !dialog"
          type="button"
          class="mt-5 mb-5 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 w-full inline-flex justify-center rounded-md border border-transparent shadow-md px-4 py-2 bg-indigo-500 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500  sm:w-auto"
        >
          <span v-if="showalert">Hide</span> <span v-else>Show</span>
          <span class="ml-1">Calender</span>
        </button>
      </div>
      <!-- Option 3 -->
      <div class="justify-center flex">
        <div class="w-full max-w-sm">
          <form
            class="bg-white shadow-md rounded px-8 pt-6 pb-8"
            @submit.prevent
          >
            <label class="block text-gray-600 text-sm font-bold mb-2" for="date"
              >Select Date</label
            >
            <div class="flex w-full">
              <v-date-picker v-model="date" class="flex-grow">
                <template v-slot="{ inputValue, inputEvents }">
                  <input
                    id="date"
                    class="bg-white text-gray-700 w-full py-2 px-3 appearance-none border rounded-l focus:outline-none"
                    :class="{ 'border-red-600': errorMessage }"
                    :value="inputValue"
                    v-on="inputEvents"
                  />
                </template>
              </v-date-picker>
              <button
                type="button"
                class="text-white font-bold py-2 px-4 rounded-r user-select-none focus:outline-none"
                :class="date ? 'bg-red-500' : 'bg-red-300'"
                :disabled="!date"
                @click="date = null"
              >
                Clear
              </button>
            </div>
            <p class="text-red-600 text-xs italic mt-1" v-if="errorMessage">
              {{ errorMessage }}
            </p>
            <p class="text-blue-500 text-xs font-bold mt-1" v-else>
              We got it. Thanks!
            </p>
          </form>
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