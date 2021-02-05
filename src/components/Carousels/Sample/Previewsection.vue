<template>
  <div class="preview-section">
    <div class="grid mt-4 grid-cols-1 justify-center">
      <!-- Option 1 -->
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
      <!-- Option 2 -->
      <carousel :perPage="1" :navigationEnabled="true">
        <slide>
          <img
            style="height: 600px"
            class="object-cover w-full"
            src="/laptop-2620118_640.jpg"
            alt="carousel image"
          />
        </slide>
        <slide>
          <img
            style="height: 600px"
            class="object-cover w-full"
            src="/laptop-5842509_640.jpg"
            alt="carousel image"
          />
        </slide>
        <slide>
          <img
            style="height: 600px"
            class="object-cover w-full"
            src="/code-1839406_640.jpg"
            alt="carousel image"
          />
        </slide>
      </carousel>
      <!-- Option 3 -->
      <carousel :perPage="1" :autoplay="true">
        <slide>
          <img
            style="height: 600px"
            class="object-cover w-full"
            src="/home-5835289_640.jpg"
            alt="carousel image"
          />
        </slide>
        <slide>
          <img
            style="height: 600px"
            class="object-cover w-full"
            src="/workout-5914643_640.jpg"
            alt="carousel image"
          />
        </slide>
        <slide>
          <img
            style="height: 600px"
            class="object-cover w-full"
            src="/buildings-5795560_640.jpg"
            alt="carousel image"
          />
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //
    };
  }
};
</script>
