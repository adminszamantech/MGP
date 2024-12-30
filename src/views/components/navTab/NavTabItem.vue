<script setup>
// imports
import { gameItems } from "@/data/gameItems";
import { ref, onMounted } from "vue";

// variables
const loading = ref(true);
const { categoryId } = defineProps({
  categoryId: Number,
});

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 1000);
});
</script>

<template>
  <div class="row">
    <hr class="my-4" />
    <h5 class="text-white mb-3">Skill Games {{ categoryId }}</h5>

    <!-- Loading content -->
    <div
      v-if="loading"
      class="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2"
      v-for="(item, id) in 6"
      :key="'loading-' + id"
    >
      <div class="card bg-dark rounded-4 mb-3">
        <div class="card-image-wrapper position-relative">
          <div class="skeleton skeleton-image"></div>
        </div>
        <div class="card-body text-white d-flex justify-content-between">
          <div class="skeleton skeleton-text"></div>
        </div>
      </div>
    </div>

    <!-- Actual content -->
    <div
      v-else
      class="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2"
      v-for="(item, id) in gameItems.items"
      :key="'game-' + id"
    >
      <div class="card bg-dark rounded-4 mb-3 animate__animated animate__zoomIn">
        <div class="card-image-wrapper position-relative">
          <img
            class="card-img-top w-100 rounded-4 img-fluid"
            :src="item.image"
            :alt="item.text"
          />
          <div class="overlay d-flex align-items-center justify-content-center">
            <a :href="item.url" target="_blank" class="play-btn btn btn-default"
              ><strong>Play</strong></a
            >
          </div>
        </div>
        <div
          class="card-body text-white d-flex justify-content-between"
          id="card-body-content-wrap"
        >
          <strong>{{ item.text }}</strong>
          <a href="" class="game-info"><small>Game Info</small></a>
        </div>
      </div>
    </div>

    <hr class="my-4" />
  </div>
</template>

<style scoped>
.card-image-wrapper {
  position: relative;
}

.card-img-top {
  transition: opacity 0.3s ease-in-out;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  border-radius: 15px;
}

.card:hover {
  border: 1px solid #746a16;
  transition: border-color 0.3s ease;
  border-radius: 15px;
}

.card:hover .overlay {
  opacity: 1;
}

.play-btn {
  background-color: transparent;
  border: 1px solid white;
  padding: 5px 20px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
}

.play-btn:hover {
  background-color: transparent;
  border: 1px solid white;
  padding: 5px 20px;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
}

/* Skeleton Loader Styles */
.skeleton {
  background-color: #ccc;
  background-image: linear-gradient(90deg, #212529 25%, #343a40 50%, #212529 75%);
  background-size: 200% 100%;
  animation: loading 2.5s infinite;
}

.skeleton-image {
  height: 200px;
  border-radius: 8px;
}

.skeleton-text {
  width: 100%;
  height: 16px;
  border-radius: 4px;
  margin-top: 10px;
}

@keyframes loading {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}
</style>
