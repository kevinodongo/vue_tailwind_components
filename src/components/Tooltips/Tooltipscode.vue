<template>
  <div class="avatars">
    <div class="grid grid-cols-1 gap-y-5 mt-4 mb-4 p-2 justify-between">
      <!-- Tooltips-->
      <div
        class="flex flex-col items-center md:flex-row gap-y-3 justify-center"
      >
        <div class="tooltip cursor-pointer relative">
          <div
            class="tooltiptext absolute z-1 justify-center py-2 px-4 w-32 bg-gray-600 text-white rounded-lg"
          >
            Tooltip text
          </div>
          <div class="mt-10 text-gray-800 text-lg font-medium">
            Hover over me
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.tooltip .tooltiptext {
  visibility: hidden;
  
}
.tooltip:hover .tooltiptext {
  visibility: visible;
}
</style>
