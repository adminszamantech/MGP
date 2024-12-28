<script setup>
// imports
import SkillGameSLider from "@/views/components/home/SkillGameSLider.vue";
import selectAll from "@/assets/images/icon/select-all.png";
import billiard from "@/assets/images/icon/billiard.png";
import airplane from "@/assets/images/icon/airplane.png";
import roulette from "@/assets/images/icon/roulette.png";
import camera from "@/assets/images/icon/video-camera.png";
import slotmachine from "@/assets/images/icon/slot-machine.png";
import moneytransfer from "@/assets/images/icon/money-transfer.png";
import Esportss2w from "@/assets/images/icon/Esports_s2w.webp";
import menuimg from "@/assets/images/icon/menu.png";

// variables

// methods
</script>
<template>
  <div class="row">
    <div class="col-12">
      <ul class="nav nav-pills mb-3 d-flex justify-content-between gap-1" id="pills-tab" role="tablist">
                <li class="nav-item text-center nav-item-active" role="presentation">
                    <button class="nav-link" id="pills-discover-tab" data-bs-toggle="pill" data-bs-target="#pills-discover" type="button" role="tab" aria-controls="pills-discover" aria-selected="true">
                        <img id="icon" class="mb-1" :src="selectAll" alt="select-all"><br>
                        DISCOVER
                    </button>
                </li>
                <li class="nav-item text-center" role="presentation">
                    
                    <button class="nav-link" id="pills-tablegame-tab" data-bs-toggle="pill" data-bs-target="#pills-tablegame" type="button" role="tab" aria-controls="pills-tablegame" aria-selected="false">
                        <img id="icon" class="mb-1" :src="billiard" alt="billiard"><br>
                        TABLE GAMES
                    </button>
                </li>
                <li class="nav-item text-center" role="presentation">
                    <button class="nav-link" id="pills-crash-tab" data-bs-toggle="pill" data-bs-target="#pills-crash" type="button" role="tab" aria-controls="pills-crash" aria-selected="false">
                        <img id="icon" class="mb-1" :src="airplane" alt="airplane"><br>
                        CRASH
                    </button>
                </li>
                <li class="nav-item text-center" role="presentation">
                    
                    <button class="nav-link" id="pills-casino-tab" data-bs-toggle="pill" data-bs-target="#pills-casino" type="button" role="tab" aria-controls="pills-casino" aria-selected="true">
                        <img id="icon" class="mb-1" :src="roulette" alt="roulette"><br>
                        CASINO
                    </button>
                </li>
                <li class="nav-item text-center" role="presentation">
                    <button class="nav-link" id="pills-live-casino-tab" data-bs-toggle="pill" data-bs-target="#pills-live-casino" type="button" role="tab" aria-controls="pills-live-casino" aria-selected="false">
                        <img id="icon" class="mb-1" :src="camera" alt="video-camera"><br>
                        LIVE CASINO
                    </button>
                </li>
                <li class="nav-item text-center" role="presentation">
                    <button class="nav-link" id="pills-roulette-tab" data-bs-toggle="pill" data-bs-target="#pills-roulette" type="button" role="tab" aria-controls="pills-roulette" aria-selected="false">
                        <img id="icon" class="mb-1" :src="roulette" alt="roulette"><br>
                        ROULETTE
                    </button>
                </li>
                <li class="nav-item text-center" role="presentation">
                    <button class="nav-link" id="pills-slot-tab" data-bs-toggle="pill" data-bs-target="#pills-slot" type="button" role="tab" aria-controls="pills-slot" aria-selected="true">
                        <img id="icon" class="mb-1" :src="slotmachine" alt="slot-machine"><br>
                        SLOT
                    </button>
                </li>
                <li class="nav-item text-center" role="presentation">
                    <button class="nav-link" id="pills-instant-tab" data-bs-toggle="pill" data-bs-target="#pills-instant" type="button" role="tab" aria-controls="pills-instant" aria-selected="false">
                        <img id="icon" class="mb-1" :src="moneytransfer" alt="money-transfer"><br>
                        INSTANT WIN
                    </button>
                </li>
                <li class="nav-item text-center" role="presentation">
                    <button class="nav-link" id="pills-esport-tab" data-bs-toggle="pill" data-bs-target="#pills-esport" type="button" role="tab" aria-controls="pills-esport" aria-selected="false">
                        <img id="icon" class="mb-1" :src="Esportss2w" alt="Esport-ss2w"><br>
                        ESPORTS
                    </button>
                </li>
                <li class="nav-item text-center" role="presentation">
                    <button class="nav-link" id="pills-other-tab" data-bs-toggle="pill" data-bs-target="#pills-other" type="button" role="tab" aria-controls="pills-other" aria-selected="false">
                        <img id="icon" class="mb-1" :src="menuimg" alt="menu-img"><br>
                        OTHERS
                    </button>
                </li>
            </ul>
      <!-- <ul class="nav nav-pills mb-3 d-flex justify-content-between" id="pills-tab" role="tablist">
                <li class="nav-item text-center nav-item-active" role="presentation">
                    <button class="nav-link" id="pills-discover-tab" data-bs-toggle="pill" data-bs-target="#pills-discover" type="button" role="tab" aria-controls="pills-discover" aria-selected="true">
                        <img id="icon" class="mb-1" :src="selectAll" alt="select-all"><br>
                        DISCOVER
                    </button>
                </li>
                <li class="nav-item text-center" role="presentation">
                    
                    <button class="nav-link" id="pills-tablegame-tab" data-bs-toggle="pill" data-bs-target="#pills-tablegame" type="button" role="tab" aria-controls="pills-tablegame" aria-selected="false">
                        <img id="icon" class="mb-1" :src="billiard" alt="billiard"><br>
                        TABLE GAMES
                    </button>
                </li>
                <li class="nav-item text-center" role="presentation">
                    <button class="nav-link" id="pills-crash-tab" data-bs-toggle="pill" data-bs-target="#pills-crash" type="button" role="tab" aria-controls="pills-crash" aria-selected="false">
                        <img id="icon" class="mb-1" :src="airplane" alt="airplane"><br>
                        CRASH
                    </button>
                </li>
                <li class="nav-item text-center" role="presentation">
                    
                    <button class="nav-link" id="pills-casino-tab" data-bs-toggle="pill" data-bs-target="#pills-casino" type="button" role="tab" aria-controls="pills-casino" aria-selected="true">
                        <img id="icon" class="mb-1" :src="roulette" alt="roulette"><br>
                        CASINO
                    </button>
                </li>
                <li class="nav-item text-center" role="presentation">
                    <button class="nav-link" id="pills-live-casino-tab" data-bs-toggle="pill" data-bs-target="#pills-live-casino" type="button" role="tab" aria-controls="pills-live-casino" aria-selected="false">
                        <img id="icon" class="mb-1" :src="camera" alt="video-camera"><br>
                        LIVE CASINO
                    </button>
                </li>
                <li class="nav-item text-center" role="presentation">
                    <button class="nav-link" id="pills-roulette-tab" data-bs-toggle="pill" data-bs-target="#pills-roulette" type="button" role="tab" aria-controls="pills-roulette" aria-selected="false">
                        <img id="icon" class="mb-1" :src="roulette" alt="roulette"><br>
                        ROULETTE
                    </button>
                </li>
                <li class="nav-item text-center" role="presentation">
                    <button class="nav-link" id="pills-slot-tab" data-bs-toggle="pill" data-bs-target="#pills-slot" type="button" role="tab" aria-controls="pills-slot" aria-selected="true">
                        <img id="icon" class="mb-1" :src="slotmachine" alt="slot-machine"><br>
                        SLOT
                    </button>
                </li>
                <li class="nav-item text-center" role="presentation">
                    <button class="nav-link" id="pills-instant-tab" data-bs-toggle="pill" data-bs-target="#pills-instant" type="button" role="tab" aria-controls="pills-instant" aria-selected="false">
                        <img id="icon" class="mb-1" :src="moneytransfer" alt="money-transfer"><br>
                        INSTANT WIN
                    </button>
                </li>
                <li class="nav-item text-center" role="presentation">
                    <button class="nav-link" id="pills-esport-tab" data-bs-toggle="pill" data-bs-target="#pills-esport" type="button" role="tab" aria-controls="pills-esport" aria-selected="false">
                        <img id="icon" class="mb-1" :src="Esportss2w" alt="Esport-ss2w"><br>
                        ESPORTS
                    </button>
                </li>
                <li class="nav-item text-center" role="presentation">
                    <button class="nav-link" id="pills-other-tab" data-bs-toggle="pill" data-bs-target="#pills-other" type="button" role="tab" aria-controls="pills-other" aria-selected="false">
                        <img id="icon" class="mb-1" :src="menuimg" alt="menu-img"><br>
                        OTHERS
                    </button>
                </li>
            </ul> -->
      <div class="tab-content" id="pills-tabContent">
        <div
          class="tab-pane fade show"
          id="pills-discover"
          role="tabpanel"
          aria-labelledby="pills-discover-tab"
          tabindex="0"
        >
          <SkillGameSLider />
        </div>
        <div
          class="tab-pane fade"
          id="pills-tablegame"
          role="tabpanel"
          aria-labelledby="pills-tablegame-tab"
          tabindex="0"
        >
          Table Game
        </div>
        <div
          class="tab-pane fade"
          id="pills-crash"
          role="tabpanel"
          aria-labelledby="pills-crash-tab"
          tabindex="0"
        >
          Crash
        </div>
        <div
          class="tab-pane fade show"
          id="pills-casino"
          role="tabpanel"
          aria-labelledby="pills-casino-tab"
          tabindex="0"
        >
          Casino
        </div>
        <div
          class="tab-pane fade"
          id="pills-live-casino"
          role="tabpanel"
          aria-labelledby="pills-live-casino-tab"
          tabindex="0"
        >
          Live Casino
        </div>
        <div
          class="tab-pane fade"
          id="pills-roulette"
          role="tabpanel"
          aria-labelledby="pills-roulette-tab"
          tabindex="0"
        >
          Roulette
        </div>
        <div
          class="tab-pane fade"
          id="pills-slot"
          role="tabpanel"
          aria-labelledby="pills-slot-tab"
          tabindex="0"
        >
          Slot
        </div>
        <div
          class="tab-pane fade show"
          id="pills-instant"
          role="tabpanel"
          aria-labelledby="pills-instant-tab"
          tabindex="0"
        >
          Instant
        </div>
        <div
          class="tab-pane fade"
          id="pills-esport"
          role="tabpanel"
          aria-labelledby="pills-esport-tab"
          tabindex="0"
        >
          Esport
        </div>
        <div
          class="tab-pane fade"
          id="pills-other"
          role="tabpanel"
          aria-labelledby="pills-other-tab"
          tabindex="0"
        >
          Other
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
 .nav-pills {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    .nav-item {
        flex: 1;
        text-align: center;
    }

    .nav-link {
        width: 100%;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>
