<template>
  <div class="badges">
    <div class="grid grid-cols-1 gap-y-5 mt-10 p-2 justify-center">
      <!-- Types of Badges -->
      <div
        class="flex flex-col space-x-4 sm:flex-row space-x-1 gap-y-3 overflow-hidden justify-center"
      >
        <div class="flex justify-center">
          <div class="flex flex-col -space-y-1">
            <div class="flex justify-start">
              <div class="w-1 border-4 rounded-full border-red-800"></div>
            </div>

            <img
              class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>
        </div>
        <div class="flex justify-center">
          <div class="flex flex-col -space-y-1">
            <div class="flex justify-end">
              <div class="w-1 border-4 rounded-full border-indigo-800"></div>
            </div>

            <div class="flex justify-end">
              <div
                class="px-4 py-3 rounded-full  bg-gray-800 text-md text-white"
              >
                KD
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-center">
          <div class="flex flex-col -space-y-1">
            <img
              class="inline-block rounded-full h-14 w-14 ring-2 ring-white"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div class="w-1">
              <div class="border-4 rounded-full border-red-800"></div>
            </div>
          </div>
        </div>
        <div class="flex justify-center">
          <div class="flex flex-col -space-y-1">
            <div class="flex justify-end">
              <div class="w-1 border-4 rounded-full border-indigo-800"></div>
            </div>
            <div class="font-semibold text-xl">Tailwind</div>
          </div>
        </div>
        <div class="flex justify-center">
          <div class="flex flex-col -space-y-3">
            <img
              class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div class="flex justify-end w-16">
              <div
                class="ml-3 px-2 py-1 rounded-full  bg-yellow-400 text-xs text-gray-800"
              >
                1
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-center">
          <div class="flex flex-col -space-y-1">
            <div class="flex justify-end w-16">
              <div
                class="ml-3 px-2 py-1 rounded-full  bg-gray-800 text-xs text-white"
              >
                1
              </div>
            </div>
            <div class="flex justify-center">
              <div
                class="px-4 py-3 rounded-full  bg-green-400 text-md text-white"
              >
                KD
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-center">
          <div class="flex flex-col -space-y-3 overflow-hidden">
            <div class="flex justify-end w-40">
              <div class="px-2 py-2 rounded-full bg-red-500 text-xs text-white">
                <div class="ml-1">
                  <button
                    type="button"
                    class="flex rounded-md hover:text-white focus:outline-none"
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
                        d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <button
              type="button"
              class="w-36 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-500 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Lock Account
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
