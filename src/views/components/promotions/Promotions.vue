<template>
    <div class="card border border-dark">
      <div class="card-header bg-dark text-white position-relative p-3">
        <h5 class="text-center m-0">Promotions</h5>
        <button
          type="button"
          class="position-absolute top-50 translate-middle-y end-0 me-2 btn rounded-circle bg-black"
          aria-label="Close"
          @click="goToHome"
        >
          <i class="bi bi-x-lg text-white"></i>
        </button>
      </div>
  
      <div class="card-body">
        <div class="container">
            <p>
                Enjoy the Rummy offers and benefits to make your gaming experience even more exciting and rewarding. Enjoy various offers, schemes, rewards and benefits on a regular basis only at mgp.com. Register today, start your play and win multiple rewards.
            </p>
            <h4>Read up more about the ongoing bonus offers at mgp.com.</h4>
            <p>A player is entitled to 25 rs instant cash as sign up bonus and 100% welcome bonus on the first deposit made.</p>
            <P>A player is automatically entitled to the mgp's refer a friend bonus when he/she refer a friend (visit bring a friend t&c for more details).</P>
            <P>o bonus code needs to be entered to avail our bring a friend bonus.</P>
            <P>The bonus code is automatically applied as soon as your referred friend registers on the mgp through your referral link and makes his/her first deposit. in order to avail any other promotion or bonus, kindly enter the valid bonus code for that particular promotion or bonus offer.</P>
            <P>Kindly go through the terms & conditions for each promotion or bonus offer launched on the mgp, to know more about its validity, expiry and applicable t&c.</P>

        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';

  const router = useRouter();
  function goToHome() {
    router.push({ name: 'Home' });
  }

  </script>
  
  <style scoped>
    .container P{
        color: rgb(0, 0, 0);

    }
  </style>
  