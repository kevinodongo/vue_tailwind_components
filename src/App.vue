<template>
  <div id="app">
    <button
      id="scrollBtn"
      onclick="document.body.scrollTop=0;document.documentElement.scrollTop=0;event.preventDefault()"
      type="button"
      class="py-4 px-4 rounded-full text-gray-700 hover:text-gray-800 focus:outline-none"
    >
      <span class="sr-only">Button Label</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="h-8 w-8"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"
        />
      </svg>
    </button>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      //
    };
  },
  mounted() {
    //Get the button
    var mybutton = document.getElementById("scrollBtn");
    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {
      scrollFunction();
    };
    function scrollFunction() {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }
  }
};
</script>

<style lang="css">
#scrollBtn {
  position: fixed;
  display: none;
  bottom: 20px;
  right: 20px;
  z-index: 99;
}
</style>
