<template>
    <div class="card border border-dark">
      <div class="card-header bg-dark text-white position-relative p-3">
        <h5 class="text-center m-0">Contact Us</h5>
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
        <div class="container">
            <p>
                We encouraged our players to interact with us by way of comments, reviews, feedback, questions, concerns or complaints of any issues they may face on www.mgp.com Every interaction is examined and due responses are provided by our team. We assure you that our team is committed to providing you with exceptional service and we will get back to you as soon as possible.
            </p>

            <div class="row">
                <div class="col-md-12 col-12">
                    <h5>Contact Form</h5>
                    <p>Contact us with your query. We would be happy to answer your questions.</p>
                </div>
                <div class="col-md-6 col-12">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Name</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="">
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Phone</label>
                        <input type="phone" class="form-control" id="exampleFormControlInput1" placeholder="+8801">
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>

                    <div>
                        <button type="button" class="btn btn-danger">Submit</button>
                    </div>
                </div>
                <div class="col-md-6 col-12">
                    <ContactSlider/>
                </div>
            </div>

        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  import ContactSlider from './ContactSlider.vue';

  const router = useRouter();
  function goToHome() {
    router.push({ name: 'Home' });
  }

  </script>
  
  <style scoped>
    .container P{
        color: rgb(0, 0, 0);

    }
  </style>
  