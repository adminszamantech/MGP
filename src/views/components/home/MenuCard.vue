<script setup>
// imports
    import selectAll from '@/assets/images/icon/select-all.png';
    import billiard from '@/assets/images/icon/billiard.png';
    import airplane from '@/assets/images/icon/airplane.png';
    import roulette from '@/assets/images/icon/roulette.png';
    import camera from '@/assets/images/icon/video-camera.png';
    import slotmachine from '@/assets/images/icon/slot-machine.png';
    import moneytransfer from '@/assets/images/icon/money-transfer.png';
    import Esportss2w from '@/assets/images/icon/Esports_s2w.webp';
    import menuimg from '@/assets/images/icon/menu.png';
    import NavTabItem from '@/views/components/navTab/NavTabItem.vue';

  // variables
    import { onMounted } from 'vue';
    import $ from 'jquery';
    import 'slick-carousel';

    const items = [
    {
        image: selectAll,
        text: "DISCOVER",
    },
    {
        image: billiard,
        text: "TABLE GAMES",
    },
    {
        image: airplane,
        text: "CRASH",
    },
    {
        image: roulette,
        text: "CASINO",
    },
    {
        image: camera,
        text: "LIVE CASINO",
    },
    {
        image: roulette,
        text: "ROULETTE",
    },
    {
        image: slotmachine,
        text: "SLOT",
    },
    {
        image: moneytransfer,
        text: "INSTANT WIN",
    },
    {
        image: Esportss2w,
        text: "E SPORTS",
    },
    {
        image: menuimg,
        text: "OTHERS",
    },
    
    ];
    onMounted(() => {
        $('.card-slider').slick({
            dots: false,
            arrows: true,
            slidesToShow: 9,
            autoplay: true,
            infinite: false,
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
                slidesToShow: 1
                }
            }
            ]
        });
    });
  // methods
</script>
<template>
    <div class="row">
        <div class="col-12">
            <div class="card-slider">
                <div class="card bg-dark text-white text-center py-2" v-for="(item, index) in items" :key="index">
                    <div class="card-body menu-card">
                        <img id="icon" class="" :src="item.image" alt="select-all">
                    </div>
                    {{ item.text }}
                </div>
            </div>
        </div>
        <div class="col-12">
            <NavTabItem/>
        </div>
    </div>
</template>

<style scoped>
.menu-card{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px 0px;
}
.card-slider .card {
    transition: background 0.3s ease;
}
.card-slider .card:hover {
    background: #C72B2C !important;
    cursor: pointer;
}
.card-active{
    background: #C72B2C !important;
    cursor: pointer;
}
</style>