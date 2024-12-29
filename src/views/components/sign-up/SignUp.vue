<template>
    <div class="card card-class border border-dark">
      <div class="card-header bg-primary text-white position-relative p-3">
        <h5 class="text-center m-0">Registration</h5>
        <button
          type="button"
          class="position-absolute top-50 translate-middle-y end-0 me-2 btn rounded-circle bg-black"
          aria-label="Close"
          @click="goToHome"
        >
          <i class="bi bi-x-lg text-white"></i>
        </button>
      </div>
  
      <div class="card-body text-center">
          <div class="mb-3">
            <label for="username" class="form-label">User Name</label>
            <input
              type="text"
              id="username"
              class="form-control custom-input"
              placeholder="Enter your username"
            />
          </div>
          <div class="mb-3">
            <label for="mobileNumber" class="form-label">Mobile Number</label>
            <input
              type="number"
              id="mobileNumber"
              class="form-control custom-input"
              placeholder="+880"
            />
          </div>
  
          <div class="mb-3">
            <label for="password" class="form-label">New Password</label>
            <input
              type="text"
              id="password"
              class="form-control custom-input"
              placeholder="Enter New Password"
            />
          </div>

          <div class="mb-3">
            <label for="password" class="form-label">Confirm Password</label>
            <input
              type="text"
              id="password"
              class="form-control custom-input"
              placeholder="Enter Confirm Password"
            />
          </div>
  
          <div class="text-center d-flex justify-content-center mb-4 mt-5">
            <button type="button" class="btn btn-danger login-button position-relative">
              Submit
            </button>
          </div>
      </div>
    </div>
  </template>
  
  <script setup>
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
  
    const router = useRouter();
  
    // Navigate to home
    function goToHome() {
      router.push({ name: 'Home' });
    }
  </script>
  
  <style scoped>
    .card-class {
      margin: 0px 300px;
      background-color: #212529;
      box-shadow: 0 4px 6px rgba(108, 117, 125, 0.5);
      color: white;
    }
  
    .custom-input::placeholder {
      color: #d3d3d3 !important;
      opacity: 1;
    }
  
    .custom-input {
        background-color: rgb(81, 45, 37) !important; 
        border-color: red; 
        border: 1px solid #6c757d; 
        border-radius: 5px; 
        color: white !important; 
        width: 50% !important; 
        border-radius: 20px !important; 
        text-align: center !important; 
        margin: 0 auto !important; 
        color: #e6e6e6 !important;
    }
  
    .custom-input:focus {
      background-color: rgb(81, 45, 37);
      border-color: red !important;
      color: white;
    }
  
    .custom-input:hover {
      border-color: red;
      background-color: rgb(93, 50, 40);
    }
  
    .custom-input[type='number']::-webkit-outer-spin-button,
    .custom-input[type='number']::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  
    .custom-input[type='number'] {
      -moz-appearance: textfield;
    }
  
    .login-button {
      border-radius: 20px !important;
      padding: 8px 100px !important;
      align-items: center;
      text-transform: uppercase;
    }
  
    /* Mobile responsiveness */
    @media (max-width: 768px) {
      .card-class {
        margin: 0 20px;
      }
  
      .form-control {
        width: 90% !important;
      }
  
      .login-button {
        padding: 8px 40px !important;
      }
  
      .card-class {
        margin: 20px auto;
      }
  
      .custom-input {
        width: 90%;
      }
  
      /* Adjust text and button sizes */
      .form-label {
        font-size: 16px;
      }
  
      .custom-input::placeholder {
        font-size: 14px;
      }
  
      .login-button {
        font-size: 14px;
      }
    }
  
    /* For smaller mobile screens */
    @media (max-width: 480px) {
      .form-control {
        width: 100% !important;
      }
  
      .login-button {
        padding: 8px 30px !important;
        font-size: 12px;
      }
  
      .form-label {
        font-size: 14px;
      }
  
      .custom-input::placeholder {
        font-size: 12px;
      }
    }
  </style>
  