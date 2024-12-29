<template>
    <div class="card border border-dark">
      <div class="card-header bg-dark text-white position-relative p-3">
        <h5 class="text-center m-0">My Wallet</h5>
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
        <div class="card wallet-class">
          <div class="container referral-container text-center">
            <img :src="logo" alt="logo Picture" class="logo-img mb-3" />
            <p class="referral-text">Secure Your BDT Wallet!</p>
            <strong class="currency fs-md fw-bold">৳ 5000.00</strong>
            <div class="mt-2">
              <input
                id="referral-link-input"
                type="text"
                :value="shareLink"
                class="d-none"
              />
              <button
                class="btn btn-warning mt-2 ms-2"
                @click="goToDeposit"
              >
                Deposit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  import logo from '@/assets/images/logo/logo.png';
  
  const router = useRouter();

  // Navigate to Home page
  function goToHome() {
    router.push({ name: 'Home' });
  }

  function goToDeposit() {
    router.push({ name: 'Deposit' });
  }
  

  </script>
  
  <style scoped>
  .referral-container {
    padding: 20px;
    max-width: 500px;
    margin: 0 auto;
  }
  
  .logo-img {
    height: 50px;
    object-fit: cover;
  }
  
  .wallet-class {
    margin: 0px 300px;
    background-color: black;
    box-shadow: 0 4px 6px rgba(108, 117, 125, 0.5); /* Corrected box-shadow with rgba color */
  }
  
  .referral-text {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 15px;
    color: gray;
  }
  
  .currency {
    font-size: 28px;
    font-weight: bold;
    color: white;
  }
  
  .text-muted {
    font-size: 14px;
    color: #6c757d;
  }
  
  .btn-warning {
    font-size: 20px;
    text-transform: uppercase;
    padding: 5px 50px;
  }
  </style>
  