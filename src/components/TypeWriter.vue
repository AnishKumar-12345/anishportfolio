<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  phrases: {
    type: Array,
    default: () => [
      'Frontend Developer',
      'Vue.js Specialist',
      'UI/UX Enthusiast',
      'Creative Coder',
      'Problem Solver'
    ]
  },
  typingSpeed: {
    type: Number,
    default: 100 // milliseconds per character
  },
  deletingSpeed: {
    type: Number,
    default: 50 // milliseconds per character
  },
  delayBetween: {
    type: Number,
    default: 2000 // milliseconds between phrases
  }
})

const displayText = ref('')
const currentIndex = ref(0)
const isDeleting = ref(false)
let timeoutId = null

const type = () => {
  const currentPhrase = props.phrases[currentIndex.value]
  
  if (isDeleting.value) {
    // Deleting mode
    displayText.value = currentPhrase.substring(0, displayText.value.length - 1)
  } else {
    // Typing mode
    displayText.value = currentPhrase.substring(0, displayText.value.length + 1)
  }

  // Determine next step
  if (!isDeleting.value && displayText.value === currentPhrase) {
    // Finished typing - switch to deleting after delay
    timeoutId = setTimeout(() => {
      isDeleting.value = true
      type()
    }, props.delayBetween)
  } else if (isDeleting.value && displayText.value === '') {
    // Finished deleting - move to next phrase
    isDeleting.value = false
    currentIndex.value = (currentIndex.value + 1) % props.phrases.length
    timeoutId = setTimeout(type, 500) // Short pause before typing next
  } else {
    // Continue typing/deleting
    timeoutId = setTimeout(
      type, 
      isDeleting.value ? props.deletingSpeed : props.typingSpeed
    )
  }
}

onMounted(() => {
  // Start the animation after a brief initial delay
  timeoutId = setTimeout(type, 1000)
})

onUnmounted(() => {
  // Clean up timeouts when component is destroyed
  if (timeoutId) clearTimeout(timeoutId)
})
</script>

<template>
  <span class="typewriter">
    {{ displayText }}
    <span class="cursor" :class="{ 'cursor-blink': isDeleting }">|</span>
  </span>
</template>

<style scoped>
.typewriter {
  font-size: inherit;
  color: inherit;
  display: inline-block;
}

.cursor {
  font-weight: 300;
  opacity: 1;
  animation: blink-fast 0.7s infinite;
}

.cursor-blink {
  animation: blink-slow 1s infinite;
}

@keyframes blink-fast {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

@keyframes blink-slow {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}
</style>