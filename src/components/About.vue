<template>
    <v-container class="about-container py-10">
      <!-- Animated background elements -->
      <div class="background-shapes">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
      </div>
  
      <v-row align="center" justify="center">
        <!-- Profile Image Column -->
        <v-col cols="12" md="5" class="d-flex justify-center">
            <div class="profile-image-container">
  <v-img 
    :src="profileImage"
    class="profile-image rounded-lg"
    :aspect-ratio="1"
    :max-width="400"
    :min-width="300"
    cover
  >
    <template v-slot:placeholder>
      <v-row class="fill-height ma-0" align="center" justify="center">
        <v-progress-circular indeterminate color="primary"></v-progress-circular>
      </v-row>
    </template>
    <template v-slot:error>
      <v-row class="fill-height ma-0" align="center" justify="center">
        <v-icon x-large color="error">mdi-image-off</v-icon>
        <p class="text-caption mt-2">Image failed to load</p>
      </v-row>
    </template>
  </v-img>
  <div class="image-overlay"></div>
  <div class="image-border-animation"></div>
</div>
        </v-col>
  
        <!-- About Content Column -->
        <v-col cols="12" md="7" class="px-6 px-md-10">
          <h2 class="text-h3 font-weight-bold mb-4 slide-in gradient-text">
            <span class="highlight-text ">About</span> Me
          </h2>
          
          <div class="text-content">
            <p class="text-body-1 mb-4 fade-in-delay-1">
              Hello! I'm <span class="accent-text">Anish Kumar</span>, a passionate frontend developer specializing in Vue.js with a strong eye for UI/UX design.
            </p>
            
            <p class="text-body-1 mb-4 fade-in-delay-2">
              I create elegant, performant web applications using modern tools like <span class="skill-highlight">Vue 3</span>, <span class="skill-highlight">Vuetify</span>, and <span class="skill-highlight">Vite</span>. My focus is on crafting seamless user experiences with clean, maintainable code.
            </p>
            
            <p class="text-body-1 mb-6 fade-in-delay-3">
              When I'm not coding, you can find me exploring new design trends, contributing to open-source projects, or enjoying a good cup of coffee while brainstorming my next project.
            </p>
          </div>
  
          <!-- Skills Section -->
          <div class="skills-section mt-6">
            <h3 class="text-h5 mb-4 slide-in-delay">My Skills</h3>
            <v-chip-group class="skills-chip-group" column>
              <v-chip 
                v-for="(skill, i) in skills" 
                :key="i"
                :color="skill.color"
                class="skill-chip"
                :style="`--delay:${i * 0.1}s`"
              >
                <v-icon left>{{ skill.icon }}</v-icon>
                {{ skill.name }}
              </v-chip>
            </v-chip-group>
          </div>
    <!-- Fun Facts - Using v-card instead of v-expansion-panel -->
    <div class="fun-facts mt-8">
          <h3 class="text-h5 mb-4 slide-in-delay">Fun Facts</h3>
          <v-card
            v-for="(fact, i) in funFacts" 
            :key="i"
            class="fact-card mb-4"
            :class="`delay-${i}`"
          >
            <v-card-text class="fact-question">
              <v-icon left>mdi-help-circle</v-icon>
              {{ fact.question }}
            </v-card-text>
            <v-card-text class="fact-answer">
              <v-icon left>mdi-lightbulb-on</v-icon>
              {{ fact.answer }}
            </v-card-text>
          </v-card>
        </div>
        
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import profileImage from '../assets/Anish.png' 
  const skills = ref([
    { name: 'Vue.js', color: 'primary', icon: 'mdi-vuejs' },
    { name: 'JavaScript', color: 'yellow darken-2', icon: 'mdi-language-javascript' },
    { name: 'Vuetify', color: 'blue darken-1', icon: 'mdi-vuetify' },
    { name: 'CSS/SCSS', color: 'pink', icon: 'mdi-language-css3' },
    { name: 'UI/UX Design', color: 'purple', icon: 'mdi-palette' },
    { name: 'Responsive Design', color: 'green', icon: 'mdi-responsive' },
    { name: 'Git', color: 'orange', icon: 'mdi-git' },
    { name: 'Vite', color: 'indigo', icon: 'mdi-lightning-bolt' }
  ])
  
  const funFacts = ref([
    {
      question: "How did I get into programming?",
      answer: "I started coding at 15 by modifying game scripts, which sparked my passion for development."
    },
    {
      question: "My development philosophy?",
      answer: "Write code that's easy to delete, not just easy to write. Clean, maintainable code is my priority."
    },
    {
      question: "Favorite part of development?",
      answer: "That 'aha' moment when everything clicks into place after solving a tricky problem."
    },
    {
      question: "When I'm not coding?",
      answer: "You'll find me hiking, reading sci-fi, or experimenting with new recipes in the kitchen."
    }
  ])
  </script>
  
  <style scoped>
  .gradient-text {
    background: linear-gradient(45deg, #1976D2, #00C853);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    display: inline-block;
  }
  .about-container {
    position: relative;
    overflow: hidden;
    max-width: 1200px;
  }
  
  /* Background shapes animation */
  .background-shapes {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    overflow: hidden;
  }
  
  .shape {
    position: absolute;
    border-radius: 50%;
    filter: blur(60px);
    opacity: 0.2;
  }
  
  .shape-1 {
    width: 300px;
    height: 300px;
    background: var(--v-primary-base);
    top: -100px;
    left: -100px;
    animation: float 15s infinite ease-in-out;
  }
  
  .shape-2 {
    width: 400px;
    height: 400px;
    background: var(--v-secondary-base);
    bottom: -150px;
    right: -100px;
    animation: float 18s infinite ease-in-out reverse;
  }
  
  .shape-3 {
    width: 200px;
    height: 200px;
    background: var(--v-accent-base);
    top: 50%;
    right: 20%;
    animation: float 12s infinite ease-in-out;
  }
  
  @keyframes float {
    0%, 100% { transform: translate(0, 0); }
    50% { transform: translate(20px, 20px); }
  }
  

  .profile-image-container {
   
    position: relative;
    max-width: 100%;
    border-radius: 16px;
    z-index: 1;
  }
  
  .profile-image {
    position: relative;
    z-index: 2;
    border-radius: 16px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    transform: perspective(1000px) rotateY(-10deg);
    transition: transform 0.5s ease;
  }
  
  .profile-image:hover {
    transform: perspective(1000px) rotateY(0deg);
  }
  
  
  .image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(var(--v-primary-base-rgb), 0.3) 0%, transparent 100%);
    border-radius: 16px;
    z-index: 1;
  }
  
  .image-border-animation {
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    border: 2px dashed var(--v-primary-base);
    border-radius: 20px;
    z-index: 0;
    animation: rotate-border 15s linear infinite;
  }
  
  @keyframes rotate-border {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  /* Text styling */
  .highlight-text {
    background: linear-gradient(45deg, #1976D2, #00C853);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    display: inline-block;
  
    position: relative;
    display: inline-block;
  }
  
  .highlight-text::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: var(--v-primary-base);
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }
  
  h2:hover .highlight-text::after {
    transform: scaleX(1);
    transform-origin: left;
  }
  
  .accent-text {
    color: var(--v-primary-base);
    font-weight: 600;
  }
  
  .skill-highlight {
    background: rgba(var(--v-primary-base-rgb), 0.1);
    padding: 2px 6px;
    border-radius: 4px;
    font-weight: 500;
  }
  
  /* Skills section */
  .skills-chip-group {
    margin-left: -4px;
  }
  
  .skill-chip {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.5s ease forwards;
    animation-delay: var(--delay);
    transition: transform 0.3s ease;
  }
  
  .skill-chip:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
  /* Fun facts section */
  .fact-panel {
    background: rgba(255, 255, 255, 0.05) !important;
    backdrop-filter: blur(10px);
    border-radius: 8px !important;
    margin-bottom: 8px;
    overflow: hidden;
    transition: all 0.3s ease;
  }
  
  .fact-panel:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  .fact-header {
    font-weight: 500;
    color: var(--v-primary-base) !important;
  }
  
  .fact-content {
    color: rgba(var(--v-theme-on-background), 0.8);
  }
  
  /* Animations */
  .slide-in {
    transform: translateX(-50px);
    opacity: 0;
    animation: slideIn 1s ease forwards;
  }
  
  .slide-in-delay {
    transform: translateX(-50px);
    opacity: 0;
    animation: slideIn 1s 0.3s ease forwards;
  }
  
  .fade-in-delay-1 {
    opacity: 0;
    animation: fadeIn 1s 0.2s ease forwards;
  }
  
  .fade-in-delay-2 {
    opacity: 0;
    animation: fadeIn 1s 0.4s ease forwards;
  }
  
  .fade-in-delay-3 {
    opacity: 0;
    animation: fadeIn 1s 0.6s ease forwards;
  }
  
  @keyframes slideIn {
    to { transform: translateX(0); opacity: 1; }
  }
  
  @keyframes fadeIn {
    to { opacity: 1; }
  }
  
  @keyframes fadeInUp {
    to { opacity: 1; transform: translateY(0); }
  }
  
  /* Responsive adjustments */
  @media (max-width: 960px) {
    .profile-image {
      transform: none !important;
      max-width: 350px;
    }
    
    .text-content {
      text-align: center;
    }
    
    .skills-chip-group {
      justify-content: center;
    }
    
    h2 {
      text-align: center;
    }
  }
  </style>