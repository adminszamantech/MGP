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
        <div class="col-md-12 shadow-sm ">
        <ul class="list-unstyled d-flex justify-content-between align-items-center py-3">
            <li class="d-flex align-items-center gap-2">
                <img id="icon" :src="chip" alt="chip">
                <router-link class="text-decoration-none text-white fs-6 " to="/">
                    LUDO
                </router-link>
            </li>
            <li class="d-flex align-items-center gap-2">
                <img id="icon" :src="symbol" alt="symbol">
                <router-link class="text-decoration-none text-white fs-6 " to="/">
                    RUMMY
                </router-link>
            </li>
            <li class="d-flex align-items-center gap-2">
                <img id="icon" :src="chip" alt="chip">
                <router-link class="text-decoration-none text-white fs-6 " to="/">
                    POCKER
                </router-link>
            </li>
            <li class="d-flex align-items-center gap-2">
                <img id="icon" :src="playing" alt="playing">
                <router-link class="text-decoration-none text-white fs-6 " to="/">
                    TEEN PATTI
                </router-link>
            </li>
            <li class="d-flex align-items-center gap-2">
                <img id="icon" :src="maintenance" alt="maintenance">
                <a class="text-decoration-none text-white fs-6 " to="/">
                    AVIATOR
                </a>
            </li>
            <li class="d-flex align-items-center gap-2">
                <img id="icon" :src="poker" alt="poker">
                <router-link class="text-decoration-none text-white fs-6 " to="/">
                    LIVE CASSINO
                </router-link>
            </li>
        </ul>
        </div>
    </div>
   
</template>