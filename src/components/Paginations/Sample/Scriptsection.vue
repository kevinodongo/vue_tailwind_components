<template>
  <div class="sample-script" style="background-color: #f5f2f0">
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
    <pre><code id="code_content" class="language-javascript"><script type="prism-javascript-markup">
 <!--Script-->
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
