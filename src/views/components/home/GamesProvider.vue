<script setup>
// imports
    import rummy from '@/assets/images/slider/rummy.webp';
    import ludo from '@/assets/images/slider/ludo.webp';
    import callbreak from '@/assets/images/slider/call-break.webp';
    import tambola from '@/assets/images/slider/tambola.webp';
    import poker from '@/assets/images/slider/poker.webp';
    import { onMounted } from 'vue';
    import $ from 'jquery';
    import 'slick-carousel';

    // variables
    const items = [
        {
            image: rummy,
        },
        {
            image: ludo,
        },
        {
            image: callbreak,
        },
        {
            image: tambola,
        },
        {
            image: poker,
        },
        {
            image: rummy,
        },
        {
            image: ludo,
        },
        {
            image: callbreak,
        },
        {
            image: tambola,
        },
        {
            image: poker,
        },
        {
            image: rummy,
        },
        {
            image: ludo,
        },
        {
            image: callbreak,
        },
        {
            image: tambola,
        },
        {
            image: poker,
        },
    
    ];
    
    onMounted(() => {
        $('.card-slider-games').slick({
            dots: false,
            arrows: true,
            slidesToShow: 5,
            autoplay: true,
            infinite: true,
            responsive: [
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 3
                }
            },
            {
                breakpoint: 800,
                settings: {
                slidesToShow: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                slidesToShow: 2
                }
            }
            ]
        });
    });
  // methods
</script>
<template>
    <div class="row">
        <h5 class="text-white mb-3">Games Provider</h5>
        <div class="col-12">
            <div class="card-slider-games">
                <div class="card bg-dark rounded-4 mb-3" v-for="(item,index) in items" :key="index">
                    <div class="card-image-wrapper position-relative">
                        <img class="card-img-top w-100 rounded-4 img-fluid" :src="item.image" :alt="item.image">
                        <div class="overlay d-flex align-items-center justify-content-center">
                            <button class="play-btn btn btn-default">View</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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