<script setup>
    // imports
    import { onMounted } from 'vue';
    import { Carousel } from 'bootstrap';
    import { getSliders } from '@/data/getSlider';
   
    // variables
    onMounted(() => {
        const myCarousel = new Carousel(document.getElementById('carouselExampleDark'), {
            interval: 2000,
            ride: 'carousel'
        });
        myCarousel.cycle();
    });
    // methods
</script>
<template>
    <div class="row my-3">
        <div class="col-md-12">
            <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                <div class="carousel-indicators d-none d-sm-flex justify-content-center">
                    <button
                        v-for="(slider, id) in getSliders.items"
                        :key="id"
                        :data-bs-target="'#carouselExampleDark'"
                        :data-bs-slide-to="id"
                        :class="{'bg-white': true, 'active': id === 1}"
                        :aria-label="'Slide ' + (id + 1)"
                    ></button>
                </div>
                <div class="carousel-inner">
                        <div
                            v-for="(slider, id) in getSliders.items"
                            :key="id"
                            :class="['carousel-item', { active: id === 1 }]"
                            data-bs-interval="2000"
                        >
                        <img :src="slider.image" class="d-block w-100 rounded" :alt="'slider' + (id + 1)">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>