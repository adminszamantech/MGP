<template>
  <video-player
    class="video-player vjs-big-play-centered"
    :src="videoSrc"
    crossorigin="anonymous"
    playsinline
    controls
    :volume="0.6"
    :height="350"
    :playback-rates="[0.7, 1.0, 1.5, 2.0]"
    @mounted="handleMounted"
    @ready="handleEvent"
    @play="handleEvent"
    @pause="handleEvent"
    @ended="handleEvent"
    @loadeddata="handleEvent"
    @waiting="handleEvent"
    @playing="handleEvent"
    @canplay="handleEvent"
    @canplaythrough="handleEvent"
    @timeupdate="handleEvent"
  />
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue';
import { VideoPlayer } from '@videojs-player/vue';
import 'video.js/dist/video-js.css';

defineProps({
  videoSrc: String,
  poster: String,
});

// Handle events for the video player
const handleEvent = (event: any) => {
  console.log('Event triggered in VideoPlayer:', event);
};

// Handle mounted event
const handleMounted = (event: any) => {
  console.log('Video Player Mounted:', event);
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';
@import '@/assets/styles/mixins.scss';

.video-player {
  background-color: #22252a;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(207, 207, 207, 0.2);
  height: 500px;
  width: 850px;
}
</style>
