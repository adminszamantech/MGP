<script setup>
    // imports
    import { gameItems } from '@/data/gameItems';
    // variables
    const {categoryId} = defineProps({
        categoryId: Number
    })

    // methods
   
</script>
<template>
    <div class="row ">
        <hr class="my-4">
        <h5 class="text-white mb-3">Skill Games {{ categoryId }}</h5>

        <div v-if="categoryId === 8" class="d-flex align-items-start">
            <div class="nav flex-column nav-pills me-3 custom-nav" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">
                    Home
                </button>
                <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                    Profile
                </button>
                <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">
                    Messages
                </button>
                <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                    Settings
                </button>
            </div>

            <div class="tab-content" id="v-pills-tabContent">
                <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                    Content for Home Tab
                </div>
                <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                    Content for Profile Tab
                </div>
                <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                    Content for Messages Tab
                </div>
                <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                    Content for Settings Tab
                </div>
            </div>
        </div>

        <div class="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2" v-for="(item, id) in gameItems.items" :key="id">
            <div class="card bg-dark rounded-4 mb-3 animate__animated animate__zoomIn">
                <div class="card-image-wrapper position-relative">
                    <img class="card-img-top w-100 rounded-4 img-fluid" :src="item.image" :alt="item.text">
                    <div class="overlay d-flex align-items-center justify-content-center">
                        <button class="play-btn btn btn-default">Play</button>
                    </div>
                </div>
                <div class="card-body text-white d-flex justify-content-between" id="card-body-content-wrap">
                    <strong class="">{{ item.text }}</strong>
                    <router-link to="/" class="game-info"><small>Game Info</small></router-link>
                </div>
            </div>
        </div> 
    </div>
    <hr class="my-4">
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
    .card:hover{
        
        border: 1px solid #746A16;
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


</style>