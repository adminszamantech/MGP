<script setup>
  // imports
  import Header from '@/views/layouts/Header.vue';
  import Footer from '@/views/layouts/Footer.vue';
  import HeaderTop from '@/views/components/home/HeaderTop.vue';
  import Slider from '@/views/components/home/Slider.vue';
  import MenuCard from '@/views/components/home/MenuCard.vue';






  // variables

  // methods
</script>

<template>
  <div class="wrapper">
    <div class="container-fluid">
      <header>
        <Header/>
      </header>
      <HeaderTop/>
      <Slider/>
      <MenuCard/>

      <main>
        <router-view />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  </div>
</template>

<style scoped>

</style>