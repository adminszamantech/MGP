<template>
    <div class="card border border-dark">
      <div class="card-header bg-dark text-white position-relative p-3">
        <h5 class="text-center m-0">Privacy Policy</h5>
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
                At MGP Games, online Skill – the skill games are for fun & excitement in an understandable and trustworthy environment. As part of this, we are committed to protecting the privacy of our users. The Privacy Policy statement explains what information we collect from our members and users & how we use the information. We require the users to register with us to access the games both practice & cash games. Personal Information of the User is information that identifies the User to MGP Games, as an individual. For this, we collect the following:
            </p>
            <ul>
              <li>Name</li>
              <li>Username</li>
              <li>Postal address</li>
              <li>Telephone or mobile number</li>
              <li>Email address</li>
              <li>Bank account details</li>
              <li>Social media account ID (if permitted by the user)</li>
              <li>Location</li>
              <li>Device ID</li>
              <li>IP address</li>
              <li>Date of birth</li>
            </ul>
            <P>If you do not provide the required information, you may not access the features we provide. Such information is not associated with your personal information and cannot be linked to you personally. MGP Games is the sole owner of the information collected on this site & the above information will be only for internal use to avoid fraud detection or trend analysis. We will not sell, share, or rent this information to others or use it in ways different from what is disclosed in this statement.</P>
            <P>We do not disclose your personal information to any third party without first receiving your permission unless mandated by law or on-demand statutory authority. In this event, we shall inform you of the same before disclosing the information. By registering on our website, however, you grant permission for your personal information to be shared and/or used as stated in this privacy policy. We may need to disclose information when required by law. MGP Games has the required security to protect the loss, misuse, and alteration of information you provide us. Your registration data is password-protected, where only you can access your information. We are not responsible for any activity which is undertaken when your password is used. We suggest you not disclose your password to anyone.</P>
            <P>By using our website, it is understood that you have given your consent to the collection and use of this information by MGP Games & its partners and affiliates in the future, who shall use the information strictly in terms hereof, or in terms of any amendment hereto. From time to time, we may change our methods of collecting information and modify our privacy policy. We will post those changes on this page so that you are always aware of what information we collect, how we use it, and under what circumstances we disclose it.</P>
            <P>We use cookies and other technologies such as pixel tags and clear gifs to store certain types of information each time you visit any page on our website. Cookies enable this website to recognize the information you have consented to give to this website and help us determine what portions of this website are most appropriate for your professional needs. We may also use cookies to serve advertising banners to you. These banners may be served by us or by a third party on our behalf. These cookies will not contain any personal information. Whether you want your web browser to accept cookies or not is up to you. If you haven’t changed your computer’s settings, most likely, your browser already accepts cookies. If you choose to decline cookies, you may not fully experience all the features of the website. You can also delete your browser cookies or disable them entirely. MGP Games cookies are kept for a lifetime on customers ‘devices. But this may significantly impact your experience with our website and may make parts of our website nonfunctional or inaccessible. Therefore, we recommend that you leave them turned on. We use third-party service providers to serve ads on our behalf across the Internet and sometimes on this site using a pixel tag or SDK, which is industry-standard technology used by most major websites. No personally identifiable information is collected or used in this process. They do not know the name, phone number, address, email address, or personally identifying information about the user.</P>
            <ul>
              <li>For any query, you can write to support@MGPgames.live</li>
              <li>For more details, please refer to our Terms of service.</li>
            </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';

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
  