

<template>
  <v-container class="fill-height" :class="{ 'dark-bg': isDark, 'light-bg': !isDark }">
    <v-row align="center" justify="center" class="text-center">
      <v-col cols="12" md="8">
        <!-- Animated greeting -->
        <h1 
          class="text-h3 text-md-h2 font-weight-bold mb-4 animate-char"
          :style="{ '--text-color': currentColor }"
        >
          Hi, I'm <span class="name-gradient">Anish</span> 👋
        </h1>
        
        <!-- TypeWriter component -->
        <div class="text-h5 text-md-h4 mb-8">
          <TypeWriter 
            :phrases="[
              'Frontend Developer',
              'Vue.js Specialist',
              'UI/UX Enthusiast',
              'Creative Coder',
              'Problem Solver'
            ]"
            :typing-speed="70"
            :deleting-speed="40"
            :delay-between="1500"
          />
        </div>

        <!-- Animated buttons -->
        <div class="button-group" >
  <!-- Download CV Button -->
  <v-btn  
    color="primary"
    size="x-large"
    class="mr-4"
    variant="flat"
    @click.stop="downloadCV"
    :disabled="false" 
  >
    Download CV
    <v-icon end>mdi-download</v-icon>
  </v-btn>
  
  <!-- Let's Talk Button -->
  <v-btn
    color="secondary"
    size="x-large"
    variant="outlined"
    :to="{ path: '/contact' }"
    :disabled="false" 
  >
    Let's Talk
    <v-icon end>mdi-email-fast</v-icon>
  </v-btn>
</div>

        <!-- Scroll indicator -->
        <div class="scroll-indicator mt-12">
          <v-icon class="bounce">mdi-chevron-double-down</v-icon>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import TypeWriter from '../components/TypeWriter.vue'
import { useTheme } from 'vuetify'
import { ref, onMounted, computed, onUnmounted  } from 'vue'
import AnishCV from '../assets/AnishOCV.pdf'

const theme = useTheme()
const isDark = computed(() => theme.global.current.value.dark)

// For the animated gradient text
const colors = ref([
  '#4facfe', // light blue
  '#00f2fe', // cyan
  '#00cdac', // teal
  '#a6c1ee', // soft purple
  '#fbc2eb'  // pink
])
const currentColor = ref(colors.value[0])

// Rotate through colors
onMounted(() => {
    console.log('Buttons should be available now')
  let colorIndex = 0
  setInterval(() => {
    colorIndex = (colorIndex + 1) % colors.value.length
    currentColor.value = colors.value[colorIndex]
  }, 3000)
})

const downloadCV = () => {
  const link = document.createElement('a')
  link.href = AnishCV
  link.download = 'Anish-Kumar-CV.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

</script>

<style scoped>
/* Background styles */
.dark-bg {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
}

.light-bg {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

/* Name gradient animation */
.name-gradient {
  background: linear-gradient(90deg, v-bind(currentColor), #a6c1ee);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: gradientShift 3s ease infinite;
  background-size: 200% auto;
}

@keyframes gradientShift {
  0% { background-position: 0% center; }
  50% { background-position: 100% center; }
  100% { background-position: 0% center; }
}

/* Character animation for greeting */
.animate-char {
  overflow: hidden;
  white-space: nowrap;
  margin: 0 auto;
}

/* Button animations */
.animate-btn {
  transition: all 0.3s ease;
  transform: translateY(0);
}

.animate-btn:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2) !important;
}

/* Scroll indicator animation */
.scroll-indicator {
  opacity: 0;
  animation: fadeIn 2s ease 3s forwards;
}

.bounce {
  animation: bounce 2s infinite;
  cursor: pointer;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-20px); }
  60% { transform: translateY(-10px); }
}

@keyframes fadeIn {
  to { opacity: 1; }
}

/* Responsive adjustments */
@media (max-width: 960px) {
  .button-group {
    flex-direction: column;
    gap: 1rem;
  }
  
  .button-group .v-btn {
    width: 100%;
    margin-right: 0 !important;
    margin-bottom: 1rem;
  }
}
</style>