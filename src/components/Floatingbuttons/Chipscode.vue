<template>
  <div class="avatars">
    <div class="grid grid-cols-1 gap-y-5 mt-4 mb-4 p-2 justify-center">
      <!-- Types of Chips-->
      <div class="flex flex-col md:flex-row gap-y-3 justify-center">
        <button
          type="button"
          class="w-full justify-center inline-flex rounded-full border border-transparent shadow-sm px-4 py-1 bg-lightBlue-500 text-sm font-medium text-white hover:bg-lightBlue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lightBlue-500 sm:ml-3 sm:w-auto"
        >
          <div class="flex items-center">
            Closable
            <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
              <button
                type="button"
                class="-mr-1 flex rounded-md hover:text-white focus:outline-none  sm:-mr-2"
              >
                <span class="sr-only">Dismiss</span>
                <!-- Heroicon name: x -->
                <svg
                  class="h-5 w-5 text-white"
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
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </button>
        <button
          type="button"
          class="w-full inline-flex justify-center rounded-full border border-transparent shadow-sm px-4 py-1 bg-green-500 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto"
        >
          <div class="flex items-center">
            Success
            <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
              <button
                type="button"
                class="-mr-1 flex rounded-md hover:text-white focus:outline-none  sm:-mr-2"
              >
                <span class="sr-only">Dismiss</span>
                <!-- Heroicon name: x -->
                <svg
                  class="h-5 w-5 text-white"
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
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </button>
        <button
          type="button"
          class="w-full inline-flex justify-center rounded-full border border-transparent shadow-sm px-4 py-1 bg-red-500 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto"
        >
          <div class="flex items-center">
            Remove
            <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
              <button
                type="button"
                class="-mr-1 flex rounded-md hover:text-white focus:outline-none  sm:-mr-2"
              >
                <span class="sr-only">Dismiss</span>
                <!-- Heroicon name: x -->
                <svg
                  class="h-5 w-5 text-white"
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
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </button>
        <button
          type="button"
          class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-1 bg-yellow-500 text-sm font-medium text-white hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 sm:ml-3 sm:w-auto"
        >
          <div class="flex items-center">
            Complete
            <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
              <button
                type="button"
                class="-mr-1 flex rounded-md hover:text-white focus:outline-none  sm:-mr-2"
              >
                <span class="sr-only">Dismiss</span>
                <!-- Heroicon name: x -->
                <svg
                  class="h-5 w-5 text-white"
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
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </button>
      </div>
      <div class="flex flex-col md:flex-row gap-y-3 justify-center">
        <button
          type="button"
          class="w-full inline-flex justify-center rounded-full border border-transparent shadow-sm px-4 py-1 bg-coolGray-500 text-sm font-medium text-white hover:bg-coolGray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-coolGray-500 sm:ml-3 sm:w-auto"
        >
          Default Button
        </button>
        <button
          type="button"
          class="w-full inline-flex justify-center border border-transparent shadow-sm px-4 py-1 bg-indigo-500 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto"
        >
          <div class="flex items-center">
            Primary Button
            <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
              <button
                type="button"
                class="-mr-1 flex rounded-md hover:text-white focus:outline-none  sm:-mr-2"
              >
                <span class="sr-only">Dismiss</span>
                <!-- Heroicon name: x -->
                <svg
                  class="h-5 w-5 text-white"
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
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </button>
        <button
          type="button"
          class="w-full inline-flex justify-center rounded-full border border-transparent shadow-sm px-4 py-1 bg-red-500 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto"
        >
          Error Button
        </button>
        <button
          type="button"
          class="w-full inline-flex justify-center rounded-full border border-transparent shadow-sm px-4 py-1 bg-lightBlue-500 text-sm font-medium text-white hover:bg-lightBlue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lightBlue-500 sm:ml-3 sm:w-auto"
        >
          Info Button
        </button>
        <button
          type="button"
          class="w-full inline-flex justify-center rounded-full border border-transparent shadow-sm px-4 py-1 bg-green-500 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto"
        >
          Green Button
        </button>
      </div>
      <div class="flex flex-col md:flex-row gap-y-3 justify-center">
        <button
          type="button"
          class="w-full inline-flex justify-center rounded-full border border-pink-500 shadow-sm px-4 py-1  text-sm font-medium text-pink-500 hover:bg-pink-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-200 sm:ml-3 sm:w-auto"
        >
          Outlined Button
        </button>
        <button
          type="button"
          class="w-full inline-flex justify-center rounded-full border border-indigo-500 shadow-sm px-4 py-1 text-sm font-medium text-indigo-500 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-200 sm:ml-3 sm:w-auto"
        >
          Outlined Button
        </button>
        <button
          type="button"
          class="w-full inline-flex justify-center border shadow-sm px-4 py-1 border-lightBlue-500 text-sm font-medium text-lightBlue-500 hover:bg-lightBlue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lightBlue-200 sm:ml-3 sm:w-auto"
        >
          <div class="flex items-center">
            Tile Button
            <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
              <button
                type="button"
                class="-mr-1 flex rounded-md hover:text-white focus:outline-none  sm:-mr-2"
              >
                <span class="sr-only">Dismiss</span>
                <!-- Heroicon name: x -->
                <svg
                  class="h-5 w-5 text-lightBlue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
            </div>
          </div>
        </button>
        <button
          type="button"
          class="w-full inline-flex justify-center rounded-md border shadow-sm px-4 py-1 border-teal-500 text-sm font-medium text-teal-500 hover:bg-teal-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-200 sm:ml-3 sm:w-auto"
        >
          Normal Button
        </button>
        <button
          type="button"
          class="w-full inline-flex justify-center rounded-full border shadow-sm px-4 py-1 border-fuchsia-500 text-sm font-medium text-fuchsia-500 hover:bg-fuchsia-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-fuchsia-200 sm:ml-3 sm:w-auto"
        >
          Default Button
        </button>
      </div>
    </div>
  </div>
</template>
