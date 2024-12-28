<script setup>

import logo from '@/assets/images/logo/logo.png';
import profile from '@/assets/images/profile/alia.png';


</script>

<template>
  <nav class="navbar navbar-dark">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img id="logo" :src="logo" alt="logo">
      </router-link>

      <div class="d-flex  align-items-center">
        <div class="mx-3 px-3 py-1 bg-dark rounded-pill">
                   <div class="d-flex justify-content-between align-items-center gap-2">
                        <img id="profile" :src="profile" alt="profile-image">
                        <div>
                            <small>displayname-1RcEP</small><br>
                            <strong class="currency fs-md fw-bold">৳5000</strong>
                        </div>
                   </div>
                </div>
        <div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div class="offcanvas-header">
                <div class="profile">
                    <div class="user-icon">
                        <img :src="profile" alt="User Icon">
                    </div>
                    <div class="user-info">
                        <p class="username">Saurov</p>
                        <span class="balance">৳5000</span>
                    </div>
                </div>
                <div class="add-cash">
                    <a to="#" class="offcanvas-title" id="offcanvasDarkNavbarLabel"><i class="bi bi-cash me-2"></i>Add Cash</a>
                </div>
              
              <button
                type="button"
                class="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item" data-bs-dismiss="offcanvas">
                  <router-link class="nav-link active" aria-current="page" to="/">
                    <i class="bi bi-house-door-fill me-2"></i>Home</router-link>
                </li>
                <li class="nav-item" data-bs-dismiss="offcanvas">
                  <router-link class="nav-link active" aria-current="page" to="/" >
                    <i class="bi bi-cash me-2"></i>MY WALLET</router-link>
                </li>
                <li class="nav-item" data-bs-dismiss="offcanvas">
                  <router-link class="nav-link active" aria-current="page" to="/deposit">
                    <i class="bi bi-cash me-2"></i>DEPOSIT
                  </router-link>
                </li>
                <li class="nav-item" data-bs-dismiss="offcanvas">
                  <router-link class="nav-link active" aria-current="page" to="/withdraw">
                    <i class="bi bi-cash me-2"></i>WITHDRAW</router-link>
                </li>
                <li class="nav-item" data-bs-dismiss="offcanvas">
                  <router-link class="nav-link active" aria-current="page" to="/">
                    <i class="bi bi-cash me-2"></i>BANK ACCOUNTs</router-link>
                </li>
                <li class="nav-item" data-bs-dismiss="offcanvas">
                  <router-link class="nav-link active" aria-current="page" to="/transections">
                    <i class="bi bi-cash me-2"></i>TRANSACTIONS</router-link>
                </li>
                <li class="nav-item" data-bs-dismiss="offcanvas">
                  <router-link class="nav-link active" aria-current="page" to="/kyc">
                    <i class="bi bi-cash me-2"></i>KYC</router-link>
                </li>
                <li class="nav-item" data-bs-dismiss="offcanvas">
                  <router-link class="nav-link active" aria-current="page" to="/">
                    <i class="bi bi-cash me-2"></i>TDS</router-link>
                </li>
                <li class="nav-item" data-bs-dismiss="offcanvas">
                  <router-link class="nav-link active" aria-current="page" to="/my-invitation">
                    <i class="bi bi-cash me-2"></i>MY invitation</router-link>
                </li>
                <li class="nav-item" data-bs-dismiss="offcanvas">
                  <router-link class="nav-link active" aria-current="page" to="/">
                    <i class="bi bi-cash me-2"></i>promotions</router-link>
                </li>
                <li class="nav-item" data-bs-dismiss="offcanvas">
                  <router-link class="nav-link active" aria-current="page" to="/game-history">
                    <i class="bi bi-cash me-2"></i>Games History</router-link>
                </li>
              </ul>
            </div>
            <div class="d-grid col-4 mx-auto mb-4">
              <button class="btn btn-danger" type="button">
                <i class="bi bi-box-arrow-right me-2"></i> LOG OUT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style>
/* Hover effect for nav links */
.nav-link {
  color: white;
  transition: all 0.3s ease;
  text-transform: uppercase;
}
.nav-link:hover {
  background-color: rgb(255, 0, 0);
  border-radius: 5px; 
  padding: 0.5rem 1rem;
  transition: all 0.3s ease;
}
.nav-item {
    font-family: Roboto, sans-serif;
    font-size: 14px;
    letter-spacing: 1px;
}
.add-cash{
    border-radius: 5px;
    border: 1px solid #424241;
    padding: 0.1rem .5rem;
    background-color: green;
}
.add-cash a{
    text-decoration: none;
    color: aliceblue;
}
.profile {
  display: flex;
  align-items: center; /* Aligns items vertically */
  gap: 10px;
  border-radius: 5px;
  border: 1px solid #424241;
  margin-right: 4px;
  background-color: rgb(43, 43, 43);
  padding: 2px 1rem ;
}

.user-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #424241;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  overflow: hidden;
}

.user-icon img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.user-info {
  display: flex;
  flex-direction: column;
}

.username {
  font-size: 14px;
  font-weight: bold;
  color: white;
  margin: 0;
}

.balance {
  font-size: 14px;
  font-weight: bold;
  color: #00ff00; /* Green color for balance */
  margin: 0;
}


</style>
