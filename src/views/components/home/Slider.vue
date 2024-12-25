<script setup>
// imports
    import slider1 from '@/assets/images/slider/slider-1.jpg';
    import slider2 from '@/assets/images/slider/slider-2.jpg';
    import slider3 from '@/assets/images/slider/slider-3.jpg';
    import slider4 from '@/assets/images/slider/slider-4.jpg';
    import slider5 from '@/assets/images/slider/slider-5.jpg';
    import slider6 from '@/assets/images/slider/slider-6.jpg';
  // variables

  // methods
</script>
<template>
    <div class="row my-3">
        <div class="col-md-12">
            <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="bg-white active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" class="bg-white" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" class="bg-white" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" class="bg-white" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" class="bg-white" aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5" class="bg-white" aria-label="Slide 6"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="2000">
                    <img :src="slider1" class="d-block w-100 rounded" alt="slider1">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                    <img :src="slider2" class="d-block w-100 rounded" alt="slider2">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img :src="slider3" class="d-block w-100 rounded" alt="slider3">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img :src="slider4" class="d-block w-100 rounded" alt="slider4">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img :src="slider5" class="d-block w-100 rounded" alt="slider5">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img :src="slider6" class="d-block w-100 rounded" alt="slider6">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>