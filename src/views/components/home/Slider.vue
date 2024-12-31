<script setup>
// imports
import { onMounted } from "vue";
import { Carousel } from "bootstrap";
import { getSliders } from "@/data/getSlider";
import { useSliderStore } from "@/stores/useSliderStore";
import slider2 from "@/assets/images/slider/slider-2.jpg";
// variables
const sliderStore = useSliderStore();
// methods
onMounted(async () => {
  await sliderStore.fetchSlider();
  const myCarousel = new Carousel(document.getElementById("carouselExampleDark"), {
    interval: 2000,
    ride: "carousel",
  });
  myCarousel.cycle();
});
</script>
<template>
  <div class="row my-3">
    <div class="col-md-12">
      <div
        id="carouselExampleDark"
        class="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators d-none d-sm-flex justify-content-center">
          <button
            v-for="(slider, id) in sliderStore.sliders"
            :key="id"
            :data-bs-target="'#carouselExampleDark'"
            :data-bs-slide-to="id"
            :class="{ 'bg-white': true, active: id === 1 }"
            :aria-label="'Slide ' + (id + 1)"
          ></button>
        </div>
        <div class="carousel-inner">
          <div
            v-for="(slider, id) in sliderStore.sliders"
            :key="id"
            :class="['carousel-item', { active: id === 1 }]"
            data-bs-interval="2000"
          >
            <img
              :src="slider2"
              class="d-block w-100 rounded"
              :alt="'slider' + (id + 1)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
