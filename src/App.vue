<template>
   <div class="app-container">
  <!-- <v-app :style="appStyles"> -->
    <!-- Floating Particles Background -->
    <div class="particles" ref="particles"></div>
    
    <!-- Animated App Bar -->
    <v-app :style="appStyles">
    <v-app-bar 
      flat 
      color="transparent" 
      :class="{'glass-nav': true, 'nav-scrolled': isScrolled}"
      @mouseenter="navHovered = true"
      @mouseleave="navHovered = false"
    >
      <v-toolbar-title class="font-weight-bold logo-text" :class="{'logo-animate': navHovered}">
        <span v-for="(char, i) in 'AnishKumarBehera'" :key="i" :style="`--i:${i}`">{{ char }}</span>
      </v-toolbar-title>
      
      <v-spacer></v-spacer>
      
      <!-- Mobile Menu Button -->
      <v-btn 
        icon 
        class="d-md-none" 
        @click="mobileMenuOpen = !mobileMenuOpen"
      >
        <v-icon>{{ mobileMenuOpen ? 'mdi-close' : 'mdi-menu' }}</v-icon>
      </v-btn>
      
      <!-- Desktop Navigation -->
      <div class="nav-links d-none d-md-flex">
        <v-btn 
          v-for="(link, i) in links" 
          :key="i"
          text 
          :to="link.to"
          class="nav-link"
          :style="`--delay:${i * 0.1}s`"
          @mouseenter="playHoverSound"
        >
          <span class="link-text">{{ link.text }}</span>
          <span class="link-underline"></span>
        </v-btn>
      </div>
      
      <v-btn icon @click="toggleTheme" class="theme-toggle d-none d-md-flex">
        <v-icon>{{ themeIcon }}</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Mobile Navigation Drawer -->
    <v-navigation-drawer
      v-model="mobileMenuOpen"
      temporary
      fixed
      right
      class="mobile-nav-drawer"
    >
      <v-list>
        <v-list-item
          v-for="(link, i) in links"
          :key="i"
          :to="link.to"
          @click="mobileMenuOpen = false"
        >
          <v-list-item-title>{{ link.text }}</v-list-item-title>
        </v-list-item>
        <v-list-item @click="toggleTheme">
          <v-list-item-title>
            <v-icon left>{{ themeIcon }}</v-icon>
            {{ theme.global.current.value.dark ? 'Light' : 'Dark' }} Mode
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Main Content -->
    <v-main>
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </v-main>
    
    <!-- Animated Footer -->
    <v-footer class="glass-footer">
      <div class="social-icons">
        <v-btn 
          v-for="(social, i) in socials" 
          :key="i"
          icon
          :href="social.link"
          target="_blank"
          class="social-icon"
          :style="`--i:${i}`"
        >
          <v-icon>{{ social.icon }}</v-icon>
        </v-btn>
      </div>
      <div class="footer-text">
        &copy; {{ new Date().getFullYear() }} Anish Kumar — Made with ❤️ and Vue.js
      </div>
    </v-footer>
    
    <!-- Audio element for hover sounds (hidden) -->
    <audio ref="hoverSound" src="../src/assets/hover2.mp3" preload="auto"></audio>
  <!-- </v-app> -->
</v-app>
</div>
</template>

<script setup>
import { ref, computed, onMounted, watch, onBeforeUnmount } from 'vue'
import { useTheme } from 'vuetify'
// import { loadFull } from 'tsparticles'
// import { tsParticles } from 'tsparticles-slim'

const theme = useTheme()
const hoverSound = ref(null)
const isScrolled = ref(false)
const navHovered = ref(false)
const mobileMenuOpen = ref(false)
const particles = ref(null)
let particlesInstance = null








const links = [
  { text: 'Home', to: '/' },
  { text: 'About', to: '/about' },
  { text: 'Projects', to: '/projects' },
  { text: 'Contact', to: '/contact' }
]

const socials = [
  { icon: 'mdi-github', link: 'https://github.com' },
  { icon: 'mdi-linkedin', link: 'https://linkedin.com' },
  { icon: 'mdi-twitter', link: 'https://twitter.com' },
  { icon: 'mdi-instagram', link: 'https://instagram.com' }
]

const themeIcon = computed(() => theme.global.current.value.dark ? 'mdi-weather-sunny' : 'mdi-weather-night')

const appStyles = computed(() => ({
  '--bg-gradient-1': theme.global.current.value.dark ? '#1a1a2e' : '#f5f7fa',
  '--bg-gradient-2': theme.global.current.value.dark ? '#16213e' : '#c3cfe2',
  '--text-primary': theme.global.current.value.dark ? '#ffffff' : '#000000'
}))

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}

function playHoverSound() {
  if (hoverSound.value) {
    hoverSound.value.currentTime = 0
    hoverSound.value.play()
  }
}

const initParticles = async () => {
  await loadFull(tsParticles) // ✅ FIX: correct usage

  if (particlesInstance) {
    await particlesInstance.destroy()
  }

  particlesInstance = await tsParticles.load(particles.value, {
    fullScreen: { enable: false },
    background: { color: { value: 'transparent' } },
    particles: {
      number: { value: 50 },
      color: { value: theme.global.current.value.dark ? '#ffffff' : '#000000' },
      shape: { type: 'circle' },
      opacity: { value: 0.5, random: true },
      size: { value: 3, random: true },
      move: {
        enable: true,
        speed: 1,
        direction: 'none',
        random: false,
        out_mode: 'bounce'
      },
      links: {
        enable: true,
        distance: 100,
        color: theme.global.current.value.dark ? '#ffffff' : '#000000',
        opacity: 0.4,
        width: 1
      }
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: 'grab' },
        onClick: { enable: true, mode: 'push' }
      },
      modes: {
        grab: { distance: 140, line_linked: { opacity: 1 } },
        push: { quantity: 4 }
      }
    }
  })
}

watch(() => theme.global.current.value.dark, async () => {
  await initParticles()
})

onMounted(() => {
  initParticles()
})

onBeforeUnmount(() => {
  if (particlesInstance) {
    particlesInstance.destroy()
  }
})


</script>

<style scoped>

/* Base Styles */


.particles {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

.v-application {
  background: linear-gradient(135deg, var(--bg-gradient-1) 0%, var(--bg-gradient-2) 100%);
  color: var(--text-primary);
}
/* App Bar Styles */
.glass-nav {
  background: rgba(255, 255, 255, 0.1) !important;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.5s ease;
  z-index: 100;
}

.nav-scrolled {
  background: rgba(0, 0, 0, 0.7) !important;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}

.logo-text span {
  display: inline-block;
  transition: transform 0.3s ease calc(var(--i) * 0.05s);
}

.logo-animate span {
  transform: translateY(-5px);
}

.nav-links {
  display: flex;
  gap: 1rem;
}

.nav-link {
  position: relative;
  overflow: hidden;
  background: transparent !important;
  opacity: 0;
  animation: fadeIn 0.5s ease forwards;
  animation-delay: var(--delay);
}

.link-text {
  position: relative;
  z-index: 2;
}

.link-underline {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: currentColor;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease;
}

.nav-link:hover .link-underline {
  transform: scaleX(1);
  transform-origin: left;
}

.theme-toggle {
  transition: transform 0.3s ease;
}

.theme-toggle:hover {
  transform: rotate(30deg) scale(1.1);
}

/* Mobile Navigation Drawer */
.mobile-nav-drawer {
  background: rgba(255, 255, 255, 0.1) !important;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.mobile-nav-drawer .v-list {
  background: transparent;
}

/* Footer Styles */
.glass-footer {
  background: rgba(255, 255, 255, 0.1) !important;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
}

.social-icons {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.social-icon {
  opacity: 0;
  transform: translateY(20px);
  animation: floatUp 0.5s ease forwards;
  animation-delay: calc(var(--i) * 0.1s);
  transition: transform 0.3s ease;
}

.social-icon:hover {
  transform: translateY(-5px) scale(1.2);
}

.footer-text {
  opacity: 0;
  animation: fadeIn 1s ease 0.5s forwards;
}

/* Page Transitions */
.page-enter-active,
.page-leave-active {
  transition: all 0.5s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Keyframes */
@keyframes fadeIn {
  to { opacity: 1; }
}

@keyframes floatUp {
  to { opacity: 1; transform: translateY(0); }
}

/* Responsive Adjustments */
@media (max-width: 960px) {
  .nav-links {
    gap: 0.5rem;
  }
  
  .logo-text span {
    font-size: 1.1rem;
  }
}
</style>