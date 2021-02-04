<template>
  <div class="pagination-preview p-2 bg-gray-100">
    <div class="grid grid-cols-1 shadow-xl bg-white">
      <div
        class="p-2 border-b border-gray-300"
        v-for="(item, index) in paginated"
        :key="index"
      >
        <div class="font-medium" v-text="item.name"></div>
        <div class="text-coolGray-500" v-text="item.text"></div>
      </div>
    </div>
    <div
      class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
    >
      <div class="flex-1 flex justify-between sm:hidden">
        <a
          @click="previousPage"
          class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500"
        >
          Previous
        </a>
        <a
          @click="nextPage"
          class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500"
        >
          Next
        </a>
      </div>
      <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p class="text-sm text-gray-700">
            Showing
            <span class="font-medium">{{ page }}</span>
            to
            <span class="font-medium">{{ numberOfPages }}</span>
            of
            <span class="font-medium">{{ items.length }}</span>
            results
          </p>
        </div>
        <div>
          <nav
            class="relative z-0 inline-flex shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            <a
              @click="previousPage"
              class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span class="sr-only">Previous</span>
              <!-- Heroicon name: chevron-left -->
              <svg
                class="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
            <a
              v-for="n in numberOfPages"
              :key="n"
              @click="onPageChange(n)"
              class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              {{ n }}
            </a>
            <a
              @click="nextPage"
              class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span class="sr-only">Next</span>
              <!-- Heroicon name: chevron-right -->
              <svg
                class="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      limit: 5,
      page: 1,
      numberOfPages: 0,
      paginated: [],
      items: [
        {
          name: "Tim Cook",
          text:
            "The pagination component is used to separate long sets of data so that it is easier for a user to consume information"
        },
        {
          name: "Tim Cook",
          text:
            "The pagination component is used to separate long sets of data so that it is easier for a user to consume information"
        },
        {
          name: "Tim Cook",
          text:
            "The pagination component is used to separate long sets of data so that it is easier for a user to consume information"
        },
        {
          name: "Tim Cook",
          text:
            "The pagination component is used to separate long sets of data so that it is easier for a user to consume information"
        },
        {
          name: "Tim Cook",
          text:
            "The pagination component is used to separate long sets of data so that it is easier for a user to consume information"
        },
        {
          name: "Wendy Cook",
          text:
            "The pagination component is used to separate long sets of data so that it is easier for a user to consume information"
        },
        {
          name: "Wendy Cook",
          text:
            "The pagination component is used to separate long sets of data so that it is easier for a user to consume information"
        },
        {
          name: "Wendy Cook",
          text:
            "The pagination component is used to separate long sets of data so that it is easier for a user to consume information"
        },
        {
          name: "Wendy Cook",
          text:
            "The pagination component is used to separate long sets of data so that it is easier for a user to consume information"
        },
        {
          name: "Wendy Cook",
          text:
            "The pagination component is used to separate long sets of data so that it is easier for a user to consume information"
        },
        {
          name: "Tim Cook",
          text:
            "The pagination component is used to separate long sets of data so that it is easier for a user to consume information"
        }
      ]
    };
  },
  mounted() {
    this.numberOfPages = Math.ceil(this.items.length / this.limit);
    this.loadlist();
  },
  methods: {
    // on page change
    onPageChange(n) {
      this.page = n;
      this.loadlist();
    },
    // next page
    nextPage() {
      let next = this.page + 1;
      if (next < this.numberOfPages) {
        this.page = next;
      } else {
        this.page = this.numberOfPages;
      }
      this.loadlist();
    },
    // previous page
    previousPage() {
      let previous = this.page - 1;
      if (previous > 0) {
        this.page = previous;
      } else {
        this.page = 1;
      }
      this.loadlist();
    },
    // load list
    loadlist() {
      var begin = (this.page - 1) * this.limit;
      var end = begin + this.limit;
      this.paginated = this.items.slice(begin, end);
    }
  }
};
</script>
