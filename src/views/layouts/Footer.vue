<template>
    <div class="row text-center">
        <div class="text-default">
            <hr>
        </div>
        <div class="col-sm-6 col-md-4 mb-3">
            <h6>ABOUT</h6>
            <ul class="list-unstyled">
                <li><router-link to="/" class="text-white fs-6 fw-medium lh-lg text-decoration-none text-white-50">Home</router-link></li>
                <li><router-link to="/promotions" class="text-white fs-6 fw-medium lh-lg text-decoration-none text-white-50">Promotions</router-link></li>
                <li><router-link to="/" class="text-white fs-6 fw-medium lh-lg text-decoration-none text-white-50">Download App</router-link></li>
            </ul>
        </div>
        <div class="col-sm-6 col-md-4 mb-3">
          <h6>CONTACT US</h6>
          <ul class="list-unstyled">
            <li><router-link to="/contact-us" class="text-white fs-6 fw-medium lh-lg text-decoration-none text-white-50">Contact Us</router-link></li>
            <li><router-link to="/" class="text-white fs-6 fw-medium lh-lg text-decoration-none text-white-50">Login & Play</router-link></li>
          </ul>
        </div>
        <div class="col-sm-6 col-md-4 mb-3">
          <h6>POLICY</h6>
          <ul class="list-unstyled">
            <li><router-link to="/privacy-policy" class="text-white fs-6 fw-medium lh-lg text-decoration-none text-white-50">Privacy Policy</router-link></li>
            <li><router-link to="/terms-conditions" class="text-white fs-6 fw-medium lh-lg text-decoration-none text-white-50">Terms & Conditions</router-link></li>
          </ul>
        </div>
        <div class="text-center">
            <h6>Copyright 2024 | <RouterLink to="">SZamanTech</RouterLink>   | All Right Reserved</h6>
        </div>
      </div>
</template>