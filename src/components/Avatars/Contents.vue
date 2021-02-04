<template>
  <div class="avatars">
    <div class="mt-20">
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
        <span class="ml-2 antialiased">Avatars</span>
      </div>
    </div>
    <h2 class="text-2xl font-semibold text-coolGray-900 tracking-wide antialiased">Avatars</h2>
    <div class="bg-white border border-gray-250 mt-3 rounded-xl">
      <nav class="border-b-2 border-gray-250  rounded-t-xl">
        <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div class="relative flex items-center justify-between h-16">
            <h1 class="hidden sm:inline text-xl">Groups of avatars</h1>
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
        <Avatarpreview />
      </div>
      <div v-if="showcode">
        <Avatarcode />
      </div>
    </div>
  </div>
</template>

<script>
import Avatarpreview from "./Avatarscode"; // normal code
import Avatarcode from "./Avatarshtml"; // html
export default {
  name: "Avatars",
  components: { Avatarcode, Avatarpreview },
  data() {
    return {
      showpreview: true,
      showcode: false
    };
  },
  methods: {
    //
  }
};
</script>
