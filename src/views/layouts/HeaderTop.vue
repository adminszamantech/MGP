<script setup>
// imports
  import chip from '@/assets/images/icon/chip.png';
  import maintenance from '@/assets/images/icon/maintenance.png';
  import playing from '@/assets/images/icon/playing-cards.png';
  import symbol from '@/assets/images/icon/symbol.png';
  import poker from '@/assets/images/icon/poker-chips.png';
  // variables

  // methods
</script>
<template>


    <div class="row header-menu px-0 px-md-2 d-none d-md-block">
        <div class="col-md-12">
        <ul class="list-unstyled d-flex justify-content-between align-items-center pt-3">
            <li class="d-flex align-items-center gap-2">
                <img id="icon" :src="chip" alt="chip">
                <a class="text-decoration-none text-white fs-6 " href="">
                    LUDO
                </a>
            </li>
            <li class="d-flex align-items-center gap-2">
                <img id="icon" :src="symbol" alt="symbol">
                <a class="text-decoration-none text-white fs-6 " href="">
                    RUMMY
                </a>
            </li>
            <li class="d-flex align-items-center gap-2">
                <img id="icon" :src="chip" alt="chip">
                <a class="text-decoration-none text-white fs-6 " href="">
                    POCKER
                </a>
            </li>
            <li class="d-flex align-items-center gap-2">
                <img id="icon" :src="playing" alt="playing">
                <a class="text-decoration-none text-white fs-6 " href="">
                    TEEN PATTI
                </a>
            </li>
            <li class="d-flex align-items-center gap-2">
                <img id="icon" :src="maintenance" alt="maintenance">
                <a class="text-decoration-none text-white fs-6 " href="">
                    AVIATOR
                </a>
            </li>
            <li class="d-flex align-items-center gap-2">
                <img id="icon" :src="poker" alt="poker">
                <a class="text-decoration-none text-white fs-6 " href="">
                    LIVE CASSINO
                </a>
            </li>
            
        </ul>
        </div>
    </div>

   
</template>