<template>
  <div class="card border border-dark">
    <div class="card-header bg-dark text-white position-relative p-3">
      <h5 class="text-center m-0">Withdraw Page</h5>
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
        <div class="card p-2 mt-3">
          <div class="row">
            <div class="col-md-3 border-end p-4">
              <h3 class="box-sub-title">₹ 5000</h3>
              <p class="text-black">Withdrawable Balance</p>
            </div>
            <div class="col-md-9">
              <div class="d-flex justify-content-between align-items-center flex-wrap">
                <div class="position-relative">
                  <label for="withdraw-amount" class="form-label m-0 position-absolute top-0 start-0 h-100 d-flex align-items-center text-secondary">₹</label>
                  <input
                    id="withdraw-amount"
                    type="number"
                    class="withdraw-input border-0 border-bottom w-100 p-2 text-secondary ps-3"
                    placeholder="Enter amount"
                  />
                </div>
                <div>
                  <a href="#" style="font-size: 12px;">History</a>
                </div>
              </div>
              <div class="w-100">
                <p class="text-black text-secondary mt-4" style="font-size: 12px;">
                  Govt policy: 30% Tax will apply on 'Net Winnings’. 
                  <a href="#" style="font-size: 12px;">Know more</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="card p-2 mt-3">
          <ul class="nav nav-tabs" id="withdrawTabs" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="mobile-tab"
                data-bs-toggle="tab"
                data-bs-target="#mobile-tab-pane"
                type="button"
                role="tab"
                aria-controls="mobile-tab-pane"
                aria-selected="true"
              >
                Mobile Banking
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="bank-tab"
                data-bs-toggle="tab"
                data-bs-target="#bank-tab-pane"
                type="button"
                role="tab"
                aria-controls="bank-tab-pane"
                aria-selected="false"
              >
                Bank Account
              </button>
            </li>
          </ul>
          <div class="tab-content" id="withdrawTabContent">
            <div
              class="tab-pane fade show active"
              id="mobile-tab-pane"
              role="tabpanel"
              aria-labelledby="mobile-tab"
              tabindex="0"
            >
              <div class="row">
                <div class="col-md-6 mt-3">
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

                    <div class="col-md-6">
                      <div class="position-relative">
                        <label for="mobile-number" class="form-label position-absolute top-0 start-0 h-100 d-flex align-items-center text-secondary">+880-</label>
                        <input
                          id="mobile-number"
                          type="number"
                          class="withdraw-input border-0 border-bottom w-100 p-2 text-secondary ps-5"
                          placeholder="Enter mobile number"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6"></div>
              </div>
            </div>

            <div
              class="tab-pane fade"
              id="bank-tab-pane"
              role="tabpanel"
              aria-labelledby="bank-tab"
              tabindex="0"
            >
              <div class="card mt-3">
                <div class="row">
                  <div class="col-md-6 p-4">
                    <div class="card">
                      <div class="card-body">
                        <div class="card-header position-relative border mb-3">
                          <h5 class="m-0">Bank Details</h5>
                        </div>
                        <div class="position-relative mb-3">
                          <label for="account-name" class="form-label text-secondary">Account Name:</label>
                          <input
                            id="account-name"
                            type="text"
                            class="form-control border-bottom ps-2"
                            placeholder="Enter account name"
                          />
                        </div>
                        <div class="position-relative mb-3">
                          <label for="account-number" class="form-label text-secondary">Account Number:</label>
                          <input
                            id="account-number"
                            type="number"
                            class="form-control border-bottom ps-2"
                            placeholder="Enter account number"
                          />
                        </div>
                        <div class="position-relative mb-3">
                          <label for="bank-name" class="form-label text-secondary">Bank Name:</label>
                          <input
                            id="bank-name"
                            type="text"
                            class="form-control border-bottom ps-2"
                            placeholder="Enter bank name"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

// Navigate to home
function goToHome() {
  router.push({ name: 'Home' });
}
</script>

<style scoped>
/* Remove the input spinner */
.withdraw-input::-webkit-outer-spin-button,
.withdraw-input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.withdraw-input[type="number"] {
  -moz-appearance: textfield;
}

.withdraw-input:focus {
  border: none;
  outline: none;
}

.withdraw-input.ps-5 {
  padding-left: 2.5rem;
}
</style>