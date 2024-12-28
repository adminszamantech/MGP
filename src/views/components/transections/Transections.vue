<template>
    <div class="card border border-dark">
      <div class="card-header bg-dark text-white position-relative p-3">
        <h5 class="text-center m-0">View Transactions</h5>
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
        <div class="row">
            <div class="col-md-6">
                <select class="form-select" aria-label="Select Account Type">
                        <option selected>Select Account Type</option>
                        <option value="1">bKash</option>
                        <option value="2">Nagad</option>
                        <option value="3">Rocket</option>
                        <option value="4">Upai</option>
                      </select>
            </div>
            <div class="col-md-6"></div>
        </div>
        <div class="card mt-3 p-3">
            <DatatableTransection/>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  import DatatableTransection from './DatatableTransection.vue';
  
  const router = useRouter();
  
  // Navigate to home
  function goToHome() {
    router.push({ name: 'Home' });
  }
  </script>
  
  <style scoped>

  </style>