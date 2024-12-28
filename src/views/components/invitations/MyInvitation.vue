<template>
    <div class="card border border-dark">
      <div class="card-header bg-dark text-white position-relative p-3">
        <h5 class="text-center m-0">My Invitation Link</h5>
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
        <div class="container referral-container text-center">
          <img :src="profile" alt="Profile Picture" class="profile-img mb-3" />
          <p class="referral-text">To get the referral bonus, share your referral code below:</p>
  
          <!-- Referral Code Input -->
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              :value="referralCode"
              readonly
              id="referral-code-input"
              aria-label="Referral Code"
              aria-describedby="copy-code-button"
            />
            <button
              class="btn btn-dark"
              type="button"
              id="copy-code-button"
              @click="copyReferralCode"
            >
              Copy Code
            </button>
          </div>
  
          <!-- Referral Link -->
          <div class="mt-3">
            <p>Share this link with others to earn rewards:</p>
            <input
              type="text"
              class="form-control"
              :value="shareLink"
              readonly
              aria-label="Referral Link"
              id="referral-link-input"
            />
            <button
              class="btn btn-dark mt-2"
              @click="copyReferralLink"
            >
              Copy Link
            </button>
            <!-- Share Button -->
            <button
              class="btn btn-primary mt-2 ms-2"
              @click="shareReferralLink"
            >
              Share Link
            </button>
          </div>
          
          <div class="mt-3">
            <p class="text-muted">Share your referral code and earn rewards when someone signs up!</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  import profile from '@/assets/images/profile/alia.png';
  
  const router = useRouter();
  const referralCode = 'ABC123XYZ';
  const shareLink = `https://yourwebsite.com/referral?code=${referralCode}`; 
  
  function goToHome() {
    router.push({ name: 'Home' });
  }
  
  function copyReferralCode() {
    const inputElement = document.getElementById('referral-code-input');
    inputElement.select();
    inputElement.setSelectionRange(0, 99999); 
    document.execCommand('copy');
    alert('Referral code copied!');
  }
  
  function copyReferralLink() {
    const inputElement = document.getElementById('referral-link-input');
    inputElement.select();
    inputElement.setSelectionRange(0, 99999); 
    document.execCommand('copy');
    alert('Referral link copied!');
  }
  
  function shareReferralLink() {
    if (navigator.share) {
      navigator.share({
        title: 'My Referral Link',
        url: shareLink,
      }).then(() => {
        console.log('Referral link shared successfully!');
      }).catch((error) => {
        console.log('Error sharing referral link:', error);
        alert('Sharing failed or not supported on this device.');
      });
    } else {
      alert('Share feature not supported on your browser. Please copy and paste the link manually.');
    }
  }
  </script>
  
  <style scoped>
  .referral-container {
    padding: 20px;
    max-width: 500px;
    margin: 0 auto;
  }
  
  .profile-img {
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 50%;
  }
  
  .referral-text {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 15px;
  }
  
  .input-group {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .input-group input {
    width: 70%;
    font-size: 16px;
    text-align: center;
  }
  
  .input-group button {
    width: 30%;
    font-size: 16px;
  }
  
  .text-muted {
    font-size: 14px;
    color: #6c757d;
  }
  
  .btn {
    font-size: 14px;
  }
  </style>
  