<script setup>
  // imports
  import Header from '@/views/layouts/Header.vue';
  import Footer from '@/views/layouts/Footer.vue';
  import HeaderTop from '@/views/layouts/HeaderTop.vue';
  import MenuCard from '@/views/components/home/MenuCard.vue';
  // variables

  // methods
</script>

<template>
  <div class="wrapper">
    <div class="container-fluid">
      <header>
        <Header/>
        <HeaderTop/>
      </header>
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