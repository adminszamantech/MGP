<script setup>
// imports
    import rummy from '@/assets/images/slider/rummy.webp';
    import ludo from '@/assets/images/slider/ludo.webp';
    import callbreak from '@/assets/images/slider/call-break.webp';
    import tambola from '@/assets/images/slider/tambola.webp';
    import poker from '@/assets/images/slider/poker.webp';
  // variables

  // methods
</script>
<template>
    <div class="row">
        <div class="text-default">
            <hr>
        </div>

        <div class="col-md-12">
            <h5 class="text-white mt-2 mb-3">Skill Games</h5>
            <div id="productCarousel" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <div class="row shadow-sm">
                        <!-- Product Card 1 -->
                        <div class="col">
                            <div class="card bg-dark rounded-4" style="width: 22rem;">
                                <div class="card-image-wrapper position-relative">
                                    <img class="card-img-top w-100 rounded-4 img-fluid" :src="rummy" alt="rummy">
                                    <div class="overlay d-flex align-items-center justify-content-center">
                                        <button class="play-btn btn btn-defalut">Play</button>
                                    </div>
                                </div>
                                <div class="card-body text-white d-flex justify-content-between">
                                    <strong>Rummy</strong>
                                    <a href="" class="game-info"><small>Game Info</small></a>
                                </div>
                            </div>
                        </div>

                        <!-- Product Card 2 -->
                        <div class="col">
                            <div class="card bg-dark rounded-4" style="width: 22rem;">
                                <div class="card-image-wrapper position-relative">
                                    <img class="card-img-top w-100 rounded-4 img-fluid" :src="ludo" alt="ludo">
                                    <div class="overlay d-flex align-items-center justify-content-center">
                                        <button class="play-btn btn btn-defalut">Play</button>
                                    </div>
                                </div>
                                <div class="card-body text-white d-flex justify-content-between">
                                    <strong>Ludo</strong>
                                    <a href="" class="game-info"><small>Game Info</small></a>
                                </div>
                            </div>
                        </div>
                        <!-- Product Card 3 -->
                        <div class="col">
                            <div class="card bg-dark rounded-4" style="width: 22rem;">
                                <div class="card-image-wrapper position-relative">
                                    <img class="card-img-top w-100 rounded-4 img-fluid" :src="callbreak" alt="callbreak">
                                    <div class="overlay d-flex align-items-center justify-content-center">
                                        <button class="play-btn btn btn-defalut">Play</button>
                                    </div>
                                </div>
                                <div class="card-body text-white d-flex justify-content-between">
                                    <strong>Call Break</strong>
                                    <a href="" class="game-info"><small>Game Info</small></a>
                                </div>
                            </div>
                        </div>
                        <!-- Product Card 4 -->
                        <div class="col">
                            <div class="card bg-dark rounded-4" style="width: 22rem;">
                                <div class="card-image-wrapper position-relative">
                                    <img class="card-img-top w-100 rounded-4 img-fluid" :src="tambola" alt="tambola">
                                    <div class="overlay d-flex align-items-center justify-content-center">
                                        <button class="play-btn btn btn-defalut">Play</button>
                                    </div>
                                </div>
                                <div class="card-body text-white d-flex justify-content-between">
                                    <strong>Tambola</strong>
                                    <a href="" class="game-info"><small>Game Info</small></a>
                                </div>
                            </div>
                        </div>
                        <!-- Product Card 5 -->
                        <div class="col">
                            <div class="card bg-dark rounded-4" style="width: 22rem;">
                                <div class="card-image-wrapper position-relative">
                                    <img class="card-img-top w-100 rounded-4 img-fluid" :src="poker" alt="poker">
                                    <div class="overlay d-flex align-items-center justify-content-center">
                                        <button class="play-btn btn btn-defalut">Play</button>
                                    </div>
                                </div>
                                <div class="card-body text-white d-flex justify-content-between">
                                    <strong>Poker</strong>
                                    <a href="" class="game-info"><small>Game Info</small></a>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                    </div>
                    <div class="carousel-item">
                        <div class="row shadow-sm">
                        <!-- Product Card 1 -->
                        <div class="col">
                            <div class="card bg-dark rounded-4" style="width: 22rem;">
                                <div class="card-image-wrapper position-relative">
                                    <img class="card-img-top w-100 rounded-4 img-fluid" :src="rummy" alt="rummy">
                                    <div class="overlay d-flex align-items-center justify-content-center">
                                        <button class="play-btn btn btn-defalut">Play</button>
                                    </div>
                                </div>
                                <div class="card-body text-white d-flex justify-content-between">
                                    <strong>Rummy</strong>
                                    <a href="" class="game-info"><small>Game Info</small></a>
                                </div>
                            </div>
                        </div>

                        <!-- Product Card 2 -->
                        <div class="col">
                            <div class="card bg-dark rounded-4" style="width: 22rem;">
                                <div class="card-image-wrapper position-relative">
                                    <img class="card-img-top w-100 rounded-4 img-fluid" :src="ludo" alt="ludo">
                                    <div class="overlay d-flex align-items-center justify-content-center">
                                        <button class="play-btn btn btn-defalut">Play</button>
                                    </div>
                                </div>
                                <div class="card-body text-white d-flex justify-content-between">
                                    <strong>Ludo</strong>
                                    <a href="" class="game-info"><small>Game Info</small></a>
                                </div>
                            </div>
                        </div>
                        <!-- Product Card 3 -->
                        <div class="col">
                            <div class="card bg-dark rounded-4" style="width: 22rem;">
                                <div class="card-image-wrapper position-relative">
                                    <img class="card-img-top w-100 rounded-4 img-fluid" :src="callbreak" alt="callbreak">
                                    <div class="overlay d-flex align-items-center justify-content-center">
                                        <button class="play-btn btn btn-defalut">Play</button>
                                    </div>
                                </div>
                                <div class="card-body text-white d-flex justify-content-between">
                                    <strong>Call Break</strong>
                                    <a href="" class="game-info"><small>Game Info</small></a>
                                </div>
                            </div>
                        </div>
                        <!-- Product Card 4 -->
                        <div class="col">
                            <div class="card bg-dark rounded-4" style="width: 22rem;">
                                <div class="card-image-wrapper position-relative">
                                    <img class="card-img-top w-100 rounded-4 img-fluid" :src="tambola" alt="tambola">
                                    <div class="overlay d-flex align-items-center justify-content-center">
                                        <button class="play-btn btn btn-defalut">Play</button>
                                    </div>
                                </div>
                                <div class="card-body text-white d-flex justify-content-between">
                                    <strong>Tambola</strong>
                                    <a href="" class="game-info"><small>Game Info</small></a>
                                </div>
                            </div>
                        </div>
                        <!-- Product Card 5 -->
                        <div class="col">
                            <div class="card bg-dark rounded-4" style="width: 22rem;">
                                <div class="card-image-wrapper position-relative">
                                    <img class="card-img-top w-100 rounded-4 img-fluid" :src="poker" alt="poker">
                                    <div class="overlay d-flex align-items-center justify-content-center">
                                        <button class="play-btn btn btn-defalut">Play</button>
                                    </div>
                                </div>
                                <div class="card-body text-white d-flex justify-content-between">
                                    <strong>Poker</strong>
                                    <a href="" class="game-info"><small>Game Info</small></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>



        <div class="text-default">
            <hr>
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
    background-color: rgba(0, 0, 0, 0.6);
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

.carousel {
    position: relative;
}

.carousel-control-prev, .carousel-control-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
}

.carousel-control-prev {
    left: 5px;
}

.carousel-control-next {
    right: 5px;
}

.carousel-control-prev-icon, .carousel-control-next-icon {
    background-color: transparent;
    font-size: 18px;
    color: white;
}

.carousel-control-prev-icon i, .carousel-control-next-icon i {
    font-size: 20px;
}
</style>