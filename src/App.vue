<script setup>
  // imports
  import Header from '@/views/layouts/Header.vue';
  import Footer from '@/views/layouts/Footer.vue';
  import HeaderTop from '@/views/layouts/HeaderTop.vue';
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

      <main>
          <router-view />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  </div>
</template>
