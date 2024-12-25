<script setup>
  // imports
  import logo from '@/assets/images/logo/logo.png'
  import profile from '@/assets/images/profile/alia.png'

  // variables

  // methods
</script>
<template>
    <nav class="navbar navbar-dark fixed-top">
          <div class="container-fluid ">
            <a class="navbar-brand" href="#">
                <img id="logo" :src="logo" alt="logo">
            </a>  
           <div class="d-flex  align-items-center">
                <div class="mx-3 px-3 py-1 bg-dark rounded-pill">
                   <div class="d-flex justify-content-between align-items-center gap-2">
                        <img id="profile" :src="profile" alt="profile-image">
                        <div>
                            <small>displayname-1RcEP</small><br>
                            <strong class="currency fs-md fw-bold">50000</strong>
                        </div>
                   </div>
                </div>
                <div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#"><i class="bi bi-house-door-fill me-2"></i>Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#"><i class="bi bi-cash me-2"></i>MY WALLET</a>
                            </li>
                        </ul>
                    </div>
                    <div class="d-grid col-4 mx-auto mb-4">
                            <button class="btn btn-danger" type="button"> <i class="bi bi-box-arrow-right me-2"></i> LOG OUT</button>
                        </div>
                    </div>
                </div>
           </div>
          </div>
        </nav>
</template>