<template>
        <!-- Modal -->
        <div class="modal fade" id="loginBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="loginBackdropLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content bg-dark text-light">
              <div class="modal-header">
                <h1 class="modal-title fs-5 w-100 text-center" id="loginBackdropLabel">Mobile Login</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>

              <div class="modal-body text-center">
                    <div class="mb-3">
                        <label for="mobileNumber" class="form-label">Mobile Number</label>
                        <input type="number" id="mobileNumber" class="form-control custom-input" placeholder="+880">
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="text" id="password" class="form-control custom-input" placeholder="*****"/>
                    </div>
              </div>
                <div class="text-center mb-5">
                    <!-- Login Button -->
                    <button type="button" class="btn btn-danger login-button position-relative">
                        Login
                    </button>
                    <!-- "Do not create Account" message -->
                    <div class="mt-3" data-bs-dismiss="modal">
                        <p class="fs-8">Do not have an account? <router-link to="/sign-up">New Account?</router-link></p>
                    </div>
                </div>
            </div>
          </div>
        </div>
</template>

<style>
    /* Style the placeholder color for the input fields */
.custom-input::placeholder {
  color: #d3d3d3 !important; /* Light gray color for placeholder */
  opacity: 1; /* Ensures the placeholder color is visible */
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

.custom-input[type="number"]::-webkit-outer-spin-button,
.custom-input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.custom-input[type="number"] {
  -moz-appearance: textfield; /* For Firefox */
}

.login-button{
  border-radius: 20px !important;
  padding: 8px 100px !important;
  align-items: center;
  text-transform: uppercase;
}

.modal-header {
  background-color: #616161; /* Light gray background */

}

</style>