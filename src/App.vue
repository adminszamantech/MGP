<script setup>
  // imports
  import Header from '@/views/layouts/Header.vue';
  import Footer from '@/views/layouts/Footer.vue';

  // variables

  // methods
</script>

<template>
  <div class="wrapper">
    <div class="container-fluid">
      <header>
        <Header/>
      </header>
      <main class="mt-5">
        <router-view />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  </div>
</template>
