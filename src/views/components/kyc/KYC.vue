<template>
  <div class="card border border-dark">
    <div class="card-header bg-dark text-white position-relative p-3">
      <h5 class="text-center m-0">KYC Information</h5>
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
          <div class="position-relative mb-3">
            <h5 class="m-0">KYC Details</h5>
          </div>
          <div class="position-relative mb-3">
            <label for="kyc-name" class="form-label text-secondary">Select Type</label>
            <select class="form-select" v-model="selectedType" aria-label="Select kyc Type">
              <option value="passport">Passport</option>
              <option value="nid">NID</option>
              <option value="dod">DOD</option>
            </select>
          </div>

          <div class="position-relative mb-3">
            <label for="kyc-name" class="form-label text-secondary">Enter Document Number</label>
            <input
              id="kyc-name"
              type="text"
              class="form-control border-bottom ps-2"
              placeholder=""
            />
          </div>

          <div class="position-relative mb-3">
            <label for="kyc-name" class="form-label text-secondary">Your Name As Per Proof</label>
            <input
              id="kyc-name"
              type="text"
              class="form-control border-bottom ps-2"
              placeholder=""
            />
          </div>

          <div class="position-relative mb-3">
            <label for="kyc-mail" class="form-label text-secondary">Email:</label>
            <input
              id="kyc-mail"
              type="text"
              class="form-control border-bottom ps-2"
              placeholder=""
            />
          </div>
        </div>

        <div class="col-md-6">
          <div class="position-relative mb-3">
            <h5 class="m-0">Upload Image</h5>
          </div>
          <div class="d-flex justify-content-center flex-wrap document-up-block">
            <!-- Show only Document Front for Passport -->
            <div class="uploadBox position-relative" v-if="selectedType === 'passport' || selectedType === 'nid' || selectedType === 'dod'">
              <input
                type="file"
                accept="image/*"
                class="w-100 h-100 position-absolute border-0 bg-transparent start-0 end-0 top-0 bottom-0"
                style="font-size: 0px; opacity: 0; cursor: pointer;"
                @change="handleFileChange($event, 'documentFront')"
              />
              <div class="uploadbox-inner">
                <img v-if="documentFront" class="uploadImage-inner" :src="documentFront" alt="Document Front Preview" />
                <span v-else>Document Front</span>
              </div>
            </div>

            <!-- Show Document Back for NID -->
            <div class="uploadBox position-relative mt-3 mt-md-0 ms-md-4" v-if="selectedType === 'nid'">
              <input
                type="file"
                accept="image/*"
                class="w-100 h-100 position-absolute border-0 bg-transparent start-0 end-0 top-0 bottom-0"
                style="font-size: 0px; opacity: 0; cursor: pointer;"
                @change="handleFileChange($event, 'documentBack')"
              />
              <div class="uploadbox-inner">
                <img v-if="documentBack" class="uploadImage-inner" :src="documentBack" alt="Document Back Preview" />
                <span v-else>Document Back</span>
              </div>
            </div>

            <!-- Submit Button -->
            <div class="w-100 text-center mt-2 mt-md-4">
              <button class="allBtn confirmEmailBtn ms-0 ms-md-0 mt-3 mt-md-0 ms-0">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const documentFront = ref(null);  
const documentBack = ref(null);   
const selectedType = ref('passport'); // Set default selected type to 'passport'

function handleFileChange(event, type) {
  const file = event.target.files[0];  

  if (file && file.type.startsWith('image/')) {
    const reader = new FileReader();
    
    reader.onload = () => {
      if (type === 'documentFront') {
        documentFront.value = reader.result; 
      } else if (type === 'documentBack') {
        documentBack.value = reader.result; 
      }
    };

    reader.readAsDataURL(file); 
  } else {
    alert('Please select a valid image file.'); 
  }
}

function goToHome() {
  router.push({ name: 'Home' }); 
}
</script>

<style scoped>
.uploadBox {
  width: 188px;
  border-radius: 10px;
  border: 2px dashed #000;
  cursor: pointer;
  padding: 10px;
}

.uploadbox-inner {
  height: 130px;
  width: 100%;
  background-color: #000000;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}

.uploadImage-inner {
  height: 130px;
  width: 100%;
  object-fit: cover;
  background-color: var(--v-primary-lighten);
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}
</style>
