<template>
  <div class="container mt-4">
    <div class="row">
      <!-- Video Player -->
      <div class="col-12 col-lg-8 video-player-container">
        <VueVideoPlayer
          :videoSrc="selectedVideoSrc"
          :poster="selectedVideoPoster"
          :key="selectedVideoSrc"
        />
        <div class="title">
            <p>{{ selectedVideoTitle }}</p>
        </div>
      </div>

      <!-- Playlist -->
      <div class="col-12 col-lg-4 playlist-container">
        <h4>Playlist</h4>
        <div
          v-for="(video, index) in playlist"
          :key="index"
          class="playlist-item"
          @click="onVideoSelect(video)"
        >
          <div class="d-flex align-items-center">
            <img :src="video.poster" alt="Video Thumbnail" class="thumbnail" />
            <span class="playlist-title">{{ video.title }}</span>
          </div>
        </div>
      </div>
      
    </div>
    
  </div>
  <hr class="my-4" />
  <GamesProvider/>
</template>



<script setup lang="ts">
import { ref } from 'vue';
import VueVideoPlayer from '@/views/components/player/VideoPlayer.vue';
import oceansPoster from '@/assets/poster/oceans.png'; 
import GamesProvider from "@/views/components/home/GamesProvider.vue";

const playlist = [
  {
    title: 'Best Of Arijit Singh || সেরা ১০ টি গান অরিজিৎ সিং || Bengal Song || অরিজিৎ সিং এর গান ',
    src: 'https://d2zihajmogu5jn.cloudfront.net/elephantsdream/ed_hd.mp4',
    poster: 'https://via.placeholder.com/100',
  },
  {
    title: 'Tui Chunli Jakhan - Full Video | Samantaral | Arijit Singh & Shreya Ghoshal | Riddhi S & Surangana B',
    src: 'https://vjs.zencdn.net/v/oceans.mp4',
    poster: oceansPoster,
  },
  {
    title: 'Video 3',
    src: 'https://dash.akamaized.net/dash264/TestCasesIOP33/adapatationSetSwitching/5/manifest.mpd',
    poster: 'https://via.placeholder.com/100',
  },
  {
    title: 'Video 4',
    src: 'https://vjs.zencdn.net/v/oceans.mp4',
    poster: 'https://via.placeholder.com/100',
  },
  {
    title: 'Video 5',
    src: 'https://vjs.zencdn.net/v/oceans.mp4',
    poster: 'https://via.placeholder.com/100',
  }
];

const selectedVideoSrc = ref(playlist[0].src);
const selectedVideoPoster = ref(playlist[0].poster);
const selectedVideoTitle = ref(playlist[0].title);

// Handle video selection from playlist
const onVideoSelect = (video: { src: string, poster: string }) => {
  selectedVideoSrc.value = video.src;
  selectedVideoPoster.value = video.poster;
  selectedVideoTitle.value = video.title; 
};
</script>

<style scoped>
.video-player-container {
  background-color: #000;
  border-radius: 8px;
  overflow: hidden;
}

.playlist-container {
  background-color: #22252a;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

h4 {
  margin-bottom: 20px;
  color: #fff;
}

.playlist-item {
  padding: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-bottom: 1px solid #333;
  transition: background-color 0.3s ease;
}

.playlist-item:hover {
  background-color: #333;
}

.thumbnail {
  width: 150px;
  height: 100px;
  border-radius: 5px;
  margin-right: 15px;
}

.playlist-title {
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  width: 240px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.title {
  margin-top: 10px;
  font-size: 18px;
  background-color: #22252a;
  padding: 10px;
  border-radius: 10px;
}

/* Mobile view adjustments */
@media (max-width: 768px) {
  .video-player-container {
    margin-bottom: 20px; /* Space between video and playlist */
  }

  .col-lg-8, .col-lg-4 {
    padding-left: 0;
    padding-right: 0;
  }

  .playlist-container {
    padding: 10px;
    box-shadow: none;
  }

  .thumbnail {
    width: 100px; 
    height: 100px;
  }

  .playlist-title {
    font-size: 12px; 
    width: auto;
  }

  .title {
    font-size: 16px;
  }
}
</style>

