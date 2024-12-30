

<template>
  <div class="card border border-dark">
    <div class="card-header bg-dark text-white position-relative p-3">
      <h5 class="text-center m-0">Add Cash</h5>
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
      <div class="card bg-light p-2">

        <div class="row">
          <div class="col-md-3 col-0"></div>
          
            <!-- Amount selection cards -->
            <div class="col-md-4 col-12 mt-3">
              <div class="row">
                <!-- Each card now calls the updateAmount method with the respective amount -->
                <div v-for="(amount, index) in [10, 20, 50, 100, 500, 1000]" :key="index" class="col-sm-6 col-6 mb-3">
                  <div 
                    class="card"
                    :class="{'border-danger': selectedCard === index}" 
                    @click="updateAmount(amount, index)"
                  >
                    <a href="#" class="text-decoration-none">
                      <div class="card-body text-center">
                        <h5 class="card-title">₹{{ amount }}</h5>
                        <p class="card-text text-muted">Bonus ₹1000</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
    
            <!-- Input and buttons section -->
            <div class="col-md-5 col-12 mt-3">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Enter Amount</label>
                <input
                  type="number"
                  class="form-control border p-2"
                  id="exampleFormControlInput1"
                  v-model="selectedAmount"
                  placeholder=""
                />
                <div class="form-text d-flex justify-content-between flex-wrap">
                  Bonus ₹ 1000
                  <a href="#">Includes Deposit & GST</a>
                </div>
              </div>
              
              <div class="mb-3 d-flex flex-column flex-sm-row">
                <button class="w-100 allBtn mb-2 mb-sm-0 me-sm-2">Manual Add</button>
                <button class="w-100 allBtn mb-2 mb-sm-0 me-sm-2">Proceed</button>
                <button class="w-100 allBtn">Coinpay</button>
              </div>
              
              <div class="mb-3">
                <div class="border-bottom d-flex justify-content-center align-items-center text-black pb-2">
                  <img :src="secure" alt="" width="30" />
                  100% SECURE
                </div>
              </div>
            </div>
            <div class="col-md-3 col-0"></div>
          </div>
          <div class="row">
            <div class="col-12 mb-3">
              <div class="col-12 bg-white rounded p-2 border mb-3">
                <p class="m-0 text-secondary text-center" style="font-size: 14px;">
                  For cash play restrictions, refer to <a href="#" class="primeColor">Terms of Service</a> | Bonus credit is subject to <a href="#" class="primeColor">Terms and Conditions</a> | Learn more about your <a href="#" class="primeColor">Add Cash Limits</a>
                </p>
              </div>
              <div class="col-12 rounded p-2" style="border: 1px solid rgb(242, 227, 202); background: rgb(242, 227, 202);">
                <p class="m-0 text-secondary text-center" style="font-size: 14px;">
                  Assam, Telangana, and Andhra Pradesh players are not allowed to play cash games. <a href="#" class="primeColor">T&C</a>
                </p>
              </div>
            </div>
          </div>

      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import secure from '@/assets/images/others/secure.png';
  import { useRouter } from 'vue-router';

  const router = useRouter();
  
  const selectedAmount = ref('');
  const selectedCard = ref(null);
  const updateAmount = (amount, cardId) => {
    selectedAmount.value = amount;
    selectedCard.value = cardId;
  };

  // Navigate to home
  function goToHome() {
    router.push({ name: 'Home' });
  }
</script>