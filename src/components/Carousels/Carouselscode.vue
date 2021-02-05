<template>
  <div class="alerts">
    <div class="grid grid-cols-1 p-2 justify-center">
      <div
        class="bg-gray-100 border border-gray-400 rounded-lg justify-center py-2 px-2 flex items-center w-full sm:w-60"
      >
        <!-- Target -->
        <input
          id="foo"
          class="bg-gray-100  focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-gray-100 rounded-lg"
          value="yarn add v-carousel"
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
        We have used v-calendar package package for transition and animation.
      </p>
      <div>
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
      </div>
    </div>
  </div>
</template>
