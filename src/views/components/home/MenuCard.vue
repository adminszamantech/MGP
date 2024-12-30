<script setup>
// imports
import NavTabItem from "@/views/components/navTab/NavTabItem.vue";
import GamesProvider from "@/views/components/home/GamesProvider.vue";
import { onMounted, ref } from "vue";
import { getCategory } from "@/data/getCategory";
import $ from "jquery";
import "slick-carousel";

// variables
const categoryId = ref(null);

onMounted(() => {
  $(".card-slider").slick({
    dots: false,
    arrows: true,
    slidesToShow: 8,
    autoplaySpeed: 4000,
    autoplay: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
});

// methods
function getItem(id) {
  categoryId.value = id;
}
</script>

<template>
  <div class="row">
    <div class="col-12">
      <!-- Card Slider -->
      <div class="card-slider">
        <div
          class="card bg-dark text-white text-center py-2"
          v-for="(item, id) in getCategory.items"
          :key="id"
          @click="getItem(item.id)"
          :class="{ 'card-active': item.id === categoryId }"
        >
          <div class="card-body menu-card">
            <img
              width="22px"
              height="22px"
              :src="item.image"
              :alt="item.text"
            />
          </div>
          <small>{{ item.text }}</small>
        </div>
      </div>
    </div>

    <!-- NavTabItem and GamesProvider Components -->
    <div class="col-12">
      <NavTabItem :categoryId="categoryId" />
    </div>

    <div class="col-12">
      <GamesProvider />
    </div>
  </div>
</template>

<style scoped>
.menu-card {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 0px;
}
.card-slider .card {
  transition: background 0.3s ease;
}
.card-slider .card:hover {
  background: #c72b2c !important;
  cursor: pointer;
}

.slick-slide {
  .card-active {
    background: #c72b2c !important;
    cursor: pointer;
  }
}
</style>
