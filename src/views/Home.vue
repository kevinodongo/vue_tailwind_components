<template>
  <div class="home">
    <nav class="bg-gray-900">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
          <div
            class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
          >
            <div class="flex-shrink-0 flex items-center">
              <img
                @click="gotohome"
                class="h-10 w-10 mr-3 cursor-pointer"
                src="https://res.cloudinary.com/dk5ch7wqm/image/upload/v1612296046/IMG-20200910-WA0020_ppnudi-removebg-preview_vqozxz.png"
                alt="logo"
              />
            </div>
            <h1 class="font-semibold text-lg text-white">Tailwind and Vue</h1>
            <p class="hidden md:inline font-normal text-coolGray-400 ml-3">
              Components implemented with Tailwind CSS and Vue
            </p>
          </div>
          <div
            class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
          >
            <!-- Profile dropdown -->
            <div class="ml-3 relative">
              <div>
                <button
                  @click="openmenu = !openmenu"
                  class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  aria-expanded="false"
                >
                  <span class="sr-only">Open main menu</span>
                  <svg
                    class="block h-6 w-6"
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
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                  <!-- Icon when menu is open. -->
                  <!--
            Heroicon name: outline/x

            Menu open: "block", Menu closed: "hidden"
          -->
                  <svg
                    class="hidden h-6 w-6"
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
              <div
                v-if="openmenu"
                class="origin-top-right absolute right-0 mt-2 w-48 sm:w-96 rounded-md shadow-lg p-4 bg-white ring-1 ring-black ring-opacity-5"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu"
              >
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                  <div>
                    <a
                      @click="scrollToAlerts"
                      class="text-gray-600 cursor-pointer hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                      >Alerts</a
                    >
                    <a
                      @click="scrollToAvatars"
                      class="text-gray-600 cursor-pointer hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                      >Avatars</a
                    >
                    <a
                      @click="scrollToButtons"
                      class="text-gray-600 cursor-pointer hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                      >Buttons</a
                    >
                    <a
                      @click="scrollToBreadcrumps"
                      class="text-gray-600 cursor-pointer hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                      >Breadcrumbs</a
                    >
                    <a
                      @click="scrollToBars"
                      class="text-gray-600 cursor-pointer hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                      >Bars</a
                    >
                    <a
                      @click="scrollToBadges"
                      class="text-gray-600 cursor-pointer hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                      >Badges</a
                    >
                    <a
                      @click="scrollToBottomnavigations"
                      class="text-gray-600 cursor-pointer hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                      >Bottom navigations</a
                    >
                    <a
                      @click="scrollToChips"
                      class="text-gray-600 cursor-pointer hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                      >Chips</a
                    >
                    <a
                      @click="scrollToCards"
                      class="text-gray-600 cursor-pointer hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                      >Cards</a
                    >
                  </div>
                  <div>
                    <a
                      @click="scrollToCalendars"
                      class="text-gray-600 hover:bg-gray-700 cursor-pointer hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                      >Calendars</a
                    >
                    <a
                      @click="scrollToCarousels"
                      class="text-gray-600 cursor-pointer hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                      >Carousel</a
                    >
                    <a
                      @click="scrollToDialogs"
                      class="text-gray-600 cursor-pointer hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                      >Dialogs</a
                    >
                    <a
                      @click="scrollToDrawers"
                      class="text-gray-600 cursor-pointer hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                      >Drawers</a
                    >
                    <a
                      @click="scrollToForms"
                      class="text-gray-600 cursor-pointer hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                      >Forms</a
                    >
                    <a
                      @click="scrollToLists"
                      class="text-gray-600 cursor-pointer hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                      >Lists</a
                    >
                    <a
                      @click="scrollToMenus"
                      class="text-gray-600 cursor-pointer hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                      >Menus</a
                    >
                    <a
                      @click="scrollToTables"
                      class="text-gray-600 cursor-pointer hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                      >Tables</a
                    >
                    <a
                      @click="scrollToTooltips"
                      class="text-gray-600 cursor-pointer hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                      >Tooltips</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <div class="py-12 bg-gray-900 min-h-screen">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
          <h2
            class="text-base text-white font-semibold tracking-wide uppercase"
          >
            Tailwind and Vue
          </h2>
          <p
            class="mt-2 text-3xl leading-8 font-semibold tracking-tight text-amber-400 sm:text-4xl"
          >
            A better way to design
          </p>
          <p class="mt-4 max-w-2xl text-lg md:text-xl text-white lg:mx-auto">
            I loved Tailwind CSS but transitioning from Vuetify was difficult.
            So i thought i arrange my components as Vuetify does to make it
            easy!
            <span
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="1500"
              class="mt-2 flex justify-start md:justify-center"
            >
              <!-- Heroicon name: speakerphone -->
              <svg
                class="h-6 w-6 text-amber-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </p>
        </div>
        <div class="mt-24">
          <dl
            class="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10"
          >
            <div class="flex">
              <div class="flex-shrink-0">
                <div
                  class="flex items-center justify-center h-12 w-12 rounded-md bg-amber-500 text-white"
                >
                  <!-- Heroicon name: globe-alt -->
                  <svg
                    class="h-6 w-6"
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
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
              <div class="ml-4">
                <dt class="text-lg leading-6 font-medium text-white">
                  Find the perfect component
                </dt>
                <dd class="mt-2 text-base text-coolGray-400">
                  Every component is embedded live directly on the page, and you
                  can even see what they look like at different breakpoints by
                  dragging the slider on the right.
                </dd>
              </div>
            </div>

            <div class="flex">
              <div class="flex-shrink-0">
                <div
                  class="flex items-center justify-center h-12 w-12 rounded-md bg-amber-500 text-white"
                >
                  <!-- Heroicon name: scale -->
                  <svg
                    class="h-6 w-6"
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
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
              </div>
              <div class="ml-4">
                <dt class="text-lg leading-6 font-medium text-white">
                  Copy the snippet
                </dt>
                <dd class="mt-2 text-base text-coolGray-400">
                  Click the "Code" tab to see the code for a component and grab
                  the part that you need, or click the clipboard button to
                  quickly copy the entire snippet in one step.
                </dd>
              </div>
            </div>

            <div class="flex">
              <div class="flex-shrink-0">
                <div
                  class="flex items-center justify-center h-12 w-12 rounded-md bg-amber-500 text-white"
                >
                  <!-- Heroicon name: lightning-bolt -->
                  <svg
                    class="h-6 w-6"
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
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
              </div>
              <div class="ml-4">
                <dt class="text-lg leading-6 font-medium text-white">
                  How to implement
                </dt>
                <dd class="mt-2 text-base text-coolGray-400">
                  Every component is built entirely out of Tailwind utility
                  classes and how to implement with Vue framework. For animation
                  we have used AOS package.
                </dd>
              </div>
            </div>
          </dl>
        </div>
        <div class="mt-24 flex flex-col gap-y-4">
          <div class="flex justify-center">
            <button
              @click="gototailwindcss"
              type="button"
              class="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 md:w-1/2 w-full rounded-lg border-2 border-amber-400 shadow-sm px-4 py-2  text-base font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
            >
              <div class="flex items-center justify-between flex-wrap">
                <div class="w-0 flex-1 flex items-center">
                  <span class="flex p-2 rounded-lg">
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
                        d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                  <p class="text-lg">Tailwind Documention</p>
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
                        fill-rule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </button>
          </div>
          <div class="flex justify-center">
            <button
              @click="gototailwindui"
              type="button"
              class="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 md:w-1/2 w-full rounded-lg border border-gray-400 shadow-sm px-4 py-1  text-base font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
            >
              <div class="flex items-center justify-between flex-wrap">
                <div class="w-0 flex-1 flex items-center">
                  <span class="flex p-2 rounded-lg">
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
                        d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                  <p>Tailwind UI</p>
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
                        fill-rule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="content">
          <!--Installation-->
          <div class="bg-gray-100 mb-20 rounded-lg">
            <div class="py-12">
              <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-xl font-bold mb-4">Tailwind Installation</div>
                <!-- Installation Step 1 -->
                <div class="text-lg font-medium">
                  Vue 2 Installation. The easy way of installing tailwind is as
                  follows.
                </div>
                <div class="mb-4 text-sm text-gray-500">
                  Once you have created your application in the root folder run
                  the following command:
                </div>
                <div
                  class="w-full items-center flex flex-row p-2 rounded-xl bg-indigo-200"
                >
                  <input
                    id="foo"
                    class="bg-indigo-200 w-full focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-gray-100 rounded-lg"
                    value="vue add tailwind"
                  />
                  <!-- /end -->
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
                <div class="mt-4 text-lg font-medium">
                  If you are getting below error here are the steps to fix it:
                </div>
                <div class="bg-red-100 text-black mt-2 p-2 rounded-xl">
                  Error: PostCSS plugin tailwindcss requires PostCSS 8.
                </div>
                <div class="text-sm text-gray-500 mb-4">
                  This error arises when you installed tailwindcss@latest
                  postcss@latest autoprefixer@latest
                </div>
                <div
                  class="w-full items-center flex flex-row p-2 rounded-xl bg-indigo-200"
                >
                  <input
                    id="foo1"
                    class="bg-indigo-200 w-full focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-gray-100 rounded-lg"
                    value="npm uninstall tailwindcss postcss autoprefixer"
                  />
                  <!-- /end -->
                  <button
                    data-clipboard-target="#foo1"
                    class="btn1 py-1 px-1 ml-3 rounded-sm text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-600 focus:ring-white"
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
                <div
                  class="w-full mt-2 items-center flex flex-row p-2 rounded-xl bg-indigo-200"
                >
                  <input
                    id="foo2"
                    class="bg-indigo-200 w-full focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-gray-100 rounded-lg"
                    value="npm install tailwindcss@npm:@tailwindcss/postcss7-compat @tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9"
                  />
                  <!-- /end -->
                  <button
                    data-clipboard-target="#foo2"
                    class="btn2 py-1 px-1 ml-3 rounded-sm text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-600 focus:ring-white"
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
                <div class="mt-4 text-lg font-medium">
                  Vue 3 Installation. The easy way of installing tailwind is
                  through Vite.
                </div>
                <div class="text-sm text-gray-500 mb-4">
                  Follow the guidelines on tailwind documentation. With Vite it
                  is straight forward.
                </div>
                <a
                  target="_blank"
                  href="https://tailwindcss.com/docs/guides/vue-3-vite"
                  ><span class="text-lightBlue-600"
                    >https://tailwindcss.com/docs/guides/vue-3-vite</span
                  >
                </a>
                <div class="mt-4 text-lg font-medium">
                  For manual installation follow the steps in documentation:
                </div>
                <div class="text-sm text-gray-500 mb-4">
                  Follow the guidelines on tailwind documentation.
                </div>
                <a
                  href="https://tailwindcss.com/docs/installation"
                  target="_blank"
                  ><span class="text-lightBlue-600"
                    >https://tailwindcss.com/docs/installation</span
                  ></a
                >
              </div>
            </div>
          </div>
          <div ref="alerts"><Alerts /></div>
          <div ref="avatars"><Avatars /></div>
          <div ref="buttons"><Buttons /></div>
          <div ref="badges"><Badges /></div>
          <div ref="breadcrumbs"><Breadcrumbs /></div>
          <div ref="bars"><Bars /></div>
          <div ref="bottomnavigations"><Bottomnavigations /></div>
          <div ref="chips"><Chips /></div>
          <div ref="cards"><Cards /></div>
          <div ref="calendars"><Calendars /></div>
          <div ref="carousels"><Carousels /></div>
          <div ref="dialogs"><Dialogs /></div>
          <div ref="dashboards"><Dashboard /></div>
          <div ref="forms"><Forms /></div>
          <div ref="lists"><Lists /></div>
          <div ref="menus"><Menus /></div>
          <div ref="paginations"><Paginations /></div>
          <div ref="tables"><Tables /></div>
          <div ref="tooltips"><Tooltips /></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Buttons from "../components/Buttons/Contents.vue";
import Alerts from "../components/Alerts/Contents.vue";
import Avatars from "../components/Avatars/Contents.vue";
import Paginations from "../components/Paginations/Contents.vue";
import Badges from "../components/Badges/Contents.vue";
import Chips from "../components/Chips/Contents.vue";
import Cards from "../components/Cards/Contents.vue";
import Breadcrumbs from "../components/Breadcrumbs/Contents.vue";
import Bottomnavigations from "../components/Bottomnavigations/Contents.vue";
import Calendars from "../components/Calendars/Contents.vue";
import Carousels from "../components/Carousels/Contents";
import Tables from "../components/Tables/Contents";
import Bars from "../components/Bars/Contents";
import Forms from "../components/Forms/Contents";
import Tooltips from "../components/Tooltips/Contents";
import Lists from "../components/Lists/Contents";
import Menus from "../components/Menus/Contents";
import Dialogs from "../components/Dialogs/Contents";
import Dashboard from "../components/Dashboards/Contents";
import ClipboardJS from "clipboard";
export default {
  name: "Home",
  components: {
    Buttons,
    Alerts,
    Avatars,
    Paginations,
    Badges,
    Chips,
    Cards,
    Breadcrumbs,
    Bottomnavigations,
    Calendars,
    Carousels,
    Tables,
    Bars,
    Forms,
    Tooltips,
    Lists,
    Dialogs,
    Menus,
    Dashboard
  },
  data() {
    return {
      openmenu: false
    };
  },
  mounted() {
    new ClipboardJS(".btn");
    new ClipboardJS(".btn1");
    new ClipboardJS(".btn2");
  },
  methods: {
    // go to tailwind ui
    gototailwindui() {
      window.open("https://tailwindui.com/", "_blank");
    },
    // go to tailwind css
    gototailwindcss() {
      window.open("https://tailwindcss.com/", "_blank");
    },
    // go to home
    gotohome() {
      this.$router.push("/");
    },
    // scroll to
    scrollToSkills() {
      this.$refs["skills"].scrollIntoView({ behavior: "smooth" });
    },
    // scroll to
    scrollToAlerts() {
      this.$refs["alerts"].scrollIntoView({ behavior: "smooth" });
    },
    // scroll to
    scrollToAvatars() {
      this.$refs["avatars"].scrollIntoView({ behavior: "smooth" });
    },
    // scroll to
    scrollToButtons() {
      this.$refs["buttons"].scrollIntoView({ behavior: "smooth" });
    },
    // scroll to
    scrollToBars() {
      this.$refs["bars"].scrollIntoView({ behavior: "smooth" });
    },
    // scroll to
    scrollToBottomnavigations() {
      this.$refs["bottomnavigations"].scrollIntoView({ behavior: "smooth" });
    },
    // scroll to
    scrollToBadges() {
      this.$refs["badges"].scrollIntoView({ behavior: "smooth" });
    },
    // scroll to
    scrollToBreadcrumps() {
      this.$refs["breadcrumbs"].scrollIntoView({ behavior: "smooth" });
    },
    // scroll to
    scrollToChips() {
      this.$refs["chips"].scrollIntoView({ behavior: "smooth" });
    },
    // scroll to
    scrollToCards() {
      this.$refs["cards"].scrollIntoView({ behavior: "smooth" });
    },
    // scroll to
    scrollToCalendars() {
      this.$refs["calendars"].scrollIntoView({ behavior: "smooth" });
    },
    // scroll to
    scrollToCarousels() {
      this.$refs["carousels"].scrollIntoView({ behavior: "smooth" });
    },
    // scroll to
    scrollToDialogs() {
      this.$refs["dialogs"].scrollIntoView({ behavior: "smooth" });
    },
    // scroll to
    scrollToDrawers() {
      this.$refs["dashboards"].scrollIntoView({ behavior: "smooth" });
    },
    // scroll to
    scrollToForms() {
      this.$refs["forms"].scrollIntoView({ behavior: "smooth" });
    },
    // scroll to
    scrollToLists() {
      this.$refs["lists"].scrollIntoView({ behavior: "smooth" });
    },
    // scroll to
    scrollToMenus() {
      this.$refs["menus"].scrollIntoView({ behavior: "smooth" });
    },
    // scroll to
    scrollToPaginations() {
      this.$refs["paginations"].scrollIntoView({ behavior: "smooth" });
    },
    // scroll to
    scrollToTables() {
      this.$refs["tables"].scrollIntoView({ behavior: "smooth" });
    },
    // scroll to
    scrollToTooltips() {
      this.$refs["tooltips"].scrollIntoView({ behavior: "smooth" });
    }
  }
};
</script>
