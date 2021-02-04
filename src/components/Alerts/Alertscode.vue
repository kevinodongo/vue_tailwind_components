<template>
  <div class="alerts">
    <div class="grid grid-cols-1 gap-y-5 p-2 justify-center">
      <!--Normal-->
      <div class="bg-indigo-600">
        <div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between flex-wrap">
            <div class="w-0 flex-1 flex items-center">
              <span class="flex p-2 rounded-lg bg-indigo-800">
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
                    d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                  />
                </svg>
              </span>
              <p class="ml-3 font-medium text-white truncate">
                <span class="md:hidden">
                  We announced a new product!
                </span>
                <span class="hidden md:inline">
                  Big news! We're excited to announce a brand new product.
                </span>
              </p>
            </div>
            <div
              class="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto"
            >
              <a
                href="#"
                class="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50"
              >
                Learn more
              </a>
            </div>
            <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
              <button
                type="button"
                class="-mr-1 flex p-2 rounded-md hover:text-white focus:outline-none  sm:-mr-2"
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
      <!--Border-->
      <div
        class="bg-green-500 rounded-lg border-l-solid border-l-8 border-green-300"
      >
        <div class="max-w-7xl mx-auto py-2 px-3 sm:px-6 lg:px-6">
          <div class="flex items-center justify-between flex-wrap">
            <div class="w-0 flex-1 flex items-center">
              <p class="ml-3 font-medium text-white truncate">
                <span>
                  Aliquam eu nunc. Fusce commodo aliquam arcu. In consectetuer
                  turpis ut velit. Nulla facilisi.. Morbi mollis tellus ac
                  sapien. Fusce vel dui. Praesent ut ligula non mi varius
                  sagittis. Vivamus consectetuer hendrerit lacus. Suspendisse
                  enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
                </span>
              </p>
            </div>
            <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
              <button
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
      <!--Colored Border-->
      <div
        class="bg-white shadow-md rounded-lg border-l-solid border-l-8 border-lightBlue-500"
      >
        <div class="max-w-7xl mx-auto py-2 px-3 sm:px-6 lg:px-6">
          <div class="flex items-center justify-between flex-wrap">
            <div class="w-0 flex-1 flex items-center">
              <p class="ml-3 font-medium text-gray-600">
                <span>
                  Aliquam eu nunc. Fusce commodo aliquam arcu. In consectetuer
                  turpis ut velit. Nulla facilisi.. Morbi mollis tellus ac
                  sapien. Fusce vel dui. Praesent ut ligula non mi varius
                  sagittis. Vivamus consectetuer hendrerit lacus. Suspendisse
                  enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
                </span>
              </p>
            </div>
            <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
              <button
                type="button"
                class="-mr-1 flex p-2 hover:text-white focus:outline-none sm:-mr-2"
              >
                <span class="sr-only">Dismiss</span>
                <!-- Heroicon name: x -->
                <svg
                  class="h-6 w-6 text-lightBlue-500"
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
      <div
        class="bg-white shadow-md rounded-lg border-t-solid border-t-8 border-yellow-500"
      >
        <div class="max-w-7xl mx-auto py-2 px-3 sm:px-6 lg:px-6">
          <div class="flex items-center justify-between flex-wrap">
            <div class="w-0 flex-1 flex items-center">
              <span class="flex p-2 rounded-lg ">
                <!-- Heroicon name: speakerphone -->
                <svg
                  class="h-6 w-6 text-yellow-500"
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
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
              <p class="ml-3 font-medium text-gray-600">
                <span>
                  Aliquam eu nunc. Fusce commodo aliquam arcu. In consectetuer
                  turpis ut velit. Nulla facilisi.. Morbi mollis tellus ac
                  sapien. Fusce vel dui. Praesent ut ligula non mi varius
                  sagittis. Vivamus consectetuer hendrerit lacus. Suspendisse
                  enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
                </span>
              </p>
            </div>
            <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
              <button
                type="button"
                class="-mr-1 flex p-2 hover:text-white focus:outline-none sm:-mr-2"
              >
                <span class="sr-only">Dismiss</span>
                <!-- Heroicon name: x -->
                <svg
                  class="h-6 w-6 text-yellow-500"
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
      <!--Dense-->
      <div class="bg-red-500 shadow-md rounded-lg">
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
                    fill-rule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              <p class="ml-3 text-sm font-medium text-white">
                <span>
                  Aliquam eu nunc. Fusce commodo aliquam arcu. In consectetuer
                  turpis ut velit. Nulla facilisi.. Morbi mollis tellus ac
                  sapien. Fusce vel dui. Praesent ut ligula non mi varius
                  sagittis. Vivamus consectetuer hendrerit lacus. Suspendisse
                  enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-red-100 rounded-lg">
        <div class="max-w-7xl mx-auto py-2 px-3 sm:px-6 lg:px-6">
          <div class="flex items-center justify-between flex-wrap">
            <div class="w-0 flex-1 flex items-center">
              <span class="flex p-2 rounded-lg ">
                <!-- Heroicon name: speakerphone -->
                <svg
                  class="h-6 w-6 text-red-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              <p class="ml-3 text-sm font-medium text-gray-700">
                <span>
                  Aliquam eu nunc. Fusce commodo aliquam arcu. In consectetuer
                  turpis ut velit. Nulla facilisi.. Morbi mollis tellus ac
                  sapien. Fusce vel dui. Praesent ut ligula non mi varius
                  sagittis. Vivamus consectetuer hendrerit lacus. Suspendisse
                  enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-green-100 rounded-lg">
        <div class="max-w-7xl mx-auto py-2 px-3 sm:px-6 lg:px-6">
          <div class="flex items-center justify-between flex-wrap">
            <div class="w-0 flex-1 flex items-center">
              <span class="flex p-2 rounded-lg ">
                <!-- Heroicon name: speakerphone -->
                <svg
                  class="h-6 w-6 text-green-500"
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
              <p class="ml-3 text-sm font-medium text-gray-700">
                <span>
                  Aliquam eu nunc. Fusce commodo aliquam arcu. In consectetuer
                  turpis ut velit. Nulla facilisi.. Morbi mollis tellus ac
                  sapien. Fusce vel dui. Praesent ut ligula non mi varius
                  sagittis. Vivamus consectetuer hendrerit lacus. Suspendisse
                  enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
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
                  Aliquam eu nunc. Fusce commodo aliquam arcu. In consectetuer
                  turpis ut velit. Nulla facilisi.. Morbi mollis tellus ac
                  sapien. Fusce vel dui. Praesent ut ligula non mi varius
                  sagittis. Vivamus consectetuer hendrerit lacus. Suspendisse
                  enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
                </span>
              </p>
            </div>
            <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
              <button
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
      <!--Outlined-->
      <div class="bg-pink-100 rounded-lg border-solid border border-pink-900">
        <div class="max-w-7xl mx-auto py-2 px-3 sm:px-6 lg:px-6">
          <div class="flex items-center justify-between flex-wrap">
            <div class="w-0 flex-1 flex items-center">
              <p class="ml-3 font-medium text-pink-600">
                <span>
                  Maecenas ullamcorper, dui et placerat feugiat, eros pede
                  varius nisi, condimentum viverra felis nunc et lorem. Duis vel
                  nibh at velit scelerisque suscipit. Praesent blandit laoreet
                  nibh. Aenean posuere, tortor sed cursus feugiat, nunc augue
                  blandit nunc, eu sollicitudin urna dolor sagittis lacus. Etiam
                  sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet
                  sapien, quis venenatis ante odio sit amet eros.
                </span>
              </p>
            </div>
            <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
              <button
                type="button"
                class="-mr-1 flex p-2 rounded-md hover:text-white focus:outline-none sm:-mr-2"
              >
                <span class="sr-only">Dismiss</span>
                <!-- Heroicon name: x -->
                <svg
                  class="h-6 w-6 text-pink-500"
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
      <div
        class="bg-fuchsia-100 rounded-lg border-solid border border-fuchsia-900"
      >
        <div class="max-w-7xl mx-auto py-2 px-3 sm:px-6 lg:px-6">
          <div class="flex items-center justify-between flex-wrap">
            <div class="w-0 flex-1 flex items-center">
              <p class="ml-3 font-medium text-fuchsia-700">
                <span>
                  Aliquam eu nunc. Fusce commodo aliquam arcu. In consectetuer
                  turpis ut velit. Nulla facilisi.. Morbi mollis tellus ac
                  sapien. Fusce vel dui. Praesent ut ligula non mi varius
                  sagittis. Vivamus consectetuer hendrerit lacus. Suspendisse
                  enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
                </span>
              </p>
            </div>
            <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
              <button
                type="button"
                class="-mr-1 flex p-2 rounded-md hover:text-white focus:outline-none sm:-mr-2"
              >
                <span class="sr-only">Dismiss</span>
                <!-- Heroicon name: x -->
                <svg
                  class="h-6 w-6 text-fuchsia-900"
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
</template>
