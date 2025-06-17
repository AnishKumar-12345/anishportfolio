<template>
    <v-container class="py-12">
      <div class="text-center mb-10">
        <h2 class="text-h3 font-weight-bold mb-2 gradient-text">Let's Connect</h2>
        <p class="text-h6 text-medium-emphasis">Have a project in mind or want to collaborate? Drop me a message!</p>
      </div>
  
      <v-row class="justify-center">
        <v-col cols="12" md="8" lg="6">
          <v-card class="pa-6" elevation="4" rounded="xl">
            <v-form ref="form" @submit.prevent="submitForm">
              <v-text-field
                v-model="name"
                label="Your Name"
                :rules="nameRules"
                variant="outlined"
                color="primary"
                prepend-inner-icon="mdi-account"
                class="mb-4 animated-field"
                required
              ></v-text-field>
  
              <v-text-field
                v-model="email"
                label="Email Address"
                :rules="emailRules"
                variant="outlined"
                color="primary"
                prepend-inner-icon="mdi-email"
                class="mb-4 animated-field"
                required
              ></v-text-field>
  
              <v-textarea
                v-model="message"
                label="Your Message"
                :rules="messageRules"
                variant="outlined"
                color="primary"
                prepend-inner-icon="mdi-message-text"
                rows="5"
                auto-grow
                class="mb-6 animated-field"
                required
              ></v-textarea>
  
              <div class="text-center">
                <v-btn
                  type="submit"
                  color="primary"
                  size="large"
                  rounded="lg"
                  class="send-btn"
                  :loading="loading"
                  append-icon="mdi-send"
                >
                  Send Message
                </v-btn>
              </div>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
  
      <div class="social-links text-center mt-10">
        <p class="text-h6 mb-4">Or reach me directly through</p>
        <div class="d-flex justify-center">
          <v-btn
            v-for="(social, index) in socials"
            :key="index"
            :href="social.link"
            target="_blank"
            variant="text"
            :icon="social.icon"
            size="large"
            class="social-icon mx-2"
            :color="social.color"
          ></v-btn>
        </div>
      </div>
    </v-container>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const name = ref('');
  const email = ref('');
  const message = ref('');
  const loading = ref(false);
  
  const nameRules = [
    v => !!v || 'Name is required',
    v => (v && v.length >= 3) || 'Name must be at least 3 characters'
  ];
  
  const emailRules = [
    v => !!v || 'Email is required',
    v => /.+@.+\..+/.test(v) || 'Email must be valid'
  ];
  
  const messageRules = [
    v => !!v || 'Message is required',
    v => (v && v.length >= 10) || 'Message must be at least 10 characters'
  ];
  
  const socials = [
    { icon: 'mdi-github', link: '#', color: 'grey-darken-3' },
    { icon: 'mdi-linkedin', link: '#', color: 'blue-darken-2' },
    { icon: 'mdi-twitter', link: '#', color: 'light-blue' },
    { icon: 'mdi-email', link: 'mailto:contact@example.com', color: 'red-darken-1' }
  ];
  
  const submitForm = () => {
    loading.value = true;
    setTimeout(() => {
      loading.value = false;
      alert('Message sent successfully!');
      name.value = '';
      email.value = '';
      message.value = '';
    }, 1500);
  };
  </script>
  
  <style scoped>
  /* Remove the background gradient that forced light mode */
  /* Let Vuetify handle the background colors */
  
  /* Update text colors to use theme-aware classes */
  .text-h3, .text-h6 {
    color: inherit; /* This will automatically adjust to theme */
  }
  
  /* Card styling that works with both themes */
  .v-card {
    background: rgba(var(--v-theme-surface), 0.9);
    transition: all 0.3s ease;
  }
  
  .v-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px 0 rgba(0, 0, 0, 0.1) !important;
  }
  
  /* Animation styles (unchanged) */
  .animated-field {
    transform: translateY(20px);
    opacity: 0;
    animation: slideInUp 0.6s ease forwards;
  }
  
  @keyframes slideInUp {
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  
  .send-btn {
    padding: 0 32px;
    transition: all 0.3s ease;
    transform: translateY(20px);
    opacity: 0;
    animation: slideInUp 0.6s ease 0.3s forwards;
  }
  
  .send-btn:hover {
    transform: translateY(-2px) scale(1.02);
  }
  
  .social-icon {
    transition: all 0.3s ease;
    transform: scale(1);
  }
  
  .social-icon:hover {
    transform: scale(1.2);
  }
  
  .gradient-text {
    background: linear-gradient(45deg, #1976D2, #00C853);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    display: inline-block;
  }
  /* Stagger animations for fields */
  .animated-field:nth-child(1) { animation-delay: 0.1s; }
  .animated-field:nth-child(2) { animation-delay: 0.2s; }
  .animated-field:nth-child(3) { animation-delay: 0.3s; }
  </style>