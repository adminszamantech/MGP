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
      <div class="header-menu">
          <ul class="list-unstyled d-flex justify-content-between align-items-center px-3 py-2">
            <li><a class="text-decoration-none text-white fs-5" href="">LUDO</a></li>
            <li><a class="text-decoration-none text-white fs-5" href="">RUMMY</a></li>
            <li><a class="text-decoration-none text-white fs-5" href="">POKER</a></li>
            <li><a class="text-decoration-none text-white fs-5" href="">TEEN PATTI</a></li>
            <li><a class="text-decoration-none text-white fs-5" href="">AVIATOR</a></li>
            <li><a class="text-decoration-none text-white fs-5" href="">LIVE CASSINO</a></li>
          </ul>
      </div>
      <main>
        <router-view />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  </div>
</template>
