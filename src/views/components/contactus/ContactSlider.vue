<script setup>
// imports
import { onMounted } from "vue";
import { Carousel } from "bootstrap";
import contact1 from "@/assets/images/others/contact1.png";
import contact2 from "@/assets/images/others/contact2.png";

// images array
const images = [contact1, contact2];

// methods
onMounted(() => {
  const myCarousel = new Carousel(document.getElementById("carouselExampleDark"), {
    interval: 3000,
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
        <!-- Carousel Indicators -->
        <div class="carousel-indicators d-none d-sm-flex justify-content-center">
          <button
            v-for="(image, id) in images"
            :key="id"
            :data-bs-target="'#carouselExampleDark'"
            :data-bs-slide-to="id"
            :class="{ 'bg-white': true, active: id === 0 }"
            :aria-label="'Slide ' + (id + 1)"
          ></button>
        </div>

        <!-- Carousel Items -->
        <div class="carousel-inner">
          <div
            v-for="(image, id) in images"
            :key="id"
            :class="['carousel-item', { active: id === 0 }]"
            data-bs-interval="2000"
          >
            <img
              :src="image"
              class="d-block w-100 rounded"
              :alt="'Slide ' + (id + 1)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
