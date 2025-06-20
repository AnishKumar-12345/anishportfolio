<template>
    <v-container class="py-12">
      <div class="text-center mb-12">
        <h2 class="text-h3 font-weight-bold mb-2 gradient-text">My Creative Work</h2>
        <p class="text-h6 text-medium-emphasis">Projects that showcase my skills and passion</p>
      </div>
  
      <v-row class="justify-center">
        <v-col v-for="(project, index) in projects" :key="index" cols="12" sm="6" md="4" lg="4">
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              :elevation="isHovering ? 12 : 4"
              class="project-card pa-4"
              v-bind="props"
              :style="`transition-delay: ${index * 100}ms`"
              rounded="lg"
            >
              <div class="image-container rounded-lg overflow-hidden">
                <v-img
                  :src="project.image"
                  :lazy-src="project.placeholder"
                  aspect-ratio="1.77"
                  cover
                  class="project-image"
                  :class="{ 'image-zoom': isHovering }"
                >
                  <template v-slot:placeholder>
                    <v-row class="fill-height ma-0" align="center" justify="center">
                      <v-progress-circular indeterminate color="primary"></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
                <div class="overlay" :class="{ 'overlay-visible': isHovering }">
                  <v-btn
                    variant="tonal"
                    color="white"
                    class="view-btn"
                    :class="{ 'btn-visible': isHovering }"
                  >
                    View Project
                  </v-btn>
                </div>
              </div>
  
              <div class="pa-4">
                <div class="d-flex align-center mb-2">
                  <h3 class="text-h5 font-weight-bold">{{ project.title }}</h3>
                  <v-chip variant="outlined" color="primary" size="small" class="ml-2">
                    {{ project.tech }}
                  </v-chip>
                </div>
                <p class="text-body-1 text-medium-emphasis">{{ project.description }}</p>
                
                <div class="mt-3 d-flex">
                  <v-btn
                    v-for="(link, i) in project.links"
                    :key="i"
                    :href="link.url"
                    target="_blank"
                    variant="text"
                    size="small"
                    :prepend-icon="link.icon"
                    class="text-capitalize"
                  >
                    {{ link.label }}
                  </v-btn>
                </div>
              </div>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
  
      <div class="text-center mt-8">
        <v-btn
          variant="outlined"
          color="primary"
          size="large"
          class="see-more-btn"
          prepend-icon="mdi-github"
          href="https://github.com/AnishKumar-12345"
        >
          View More on GitHub
        </v-btn>
      </div>
    </v-container>
    <!-- <img src="../assets/Theaterbites.png" alt=""> -->
  </template>
  
  <script setup>
  const projects = [
    {
      title: "Theater Bites",
      description: "Theater Bites is a web app that lets theatergoers scan a QR code to browse menus, order food, and track delivery from their seats, enhancing the in-theater dining experience.",
      tech: "Vue 3 + Vuetify 3",
      image: "../assets/Theaterbites.png",
      placeholder: "https://via.placeholder.com/800x450/eeeeee/cccccc?text=Loading...",
      links: [
        { label: "Demo", url: "#", icon: "mdi-open-in-new" },
        { label: "Code", url: "#", icon: "mdi-github" }
      ]
    },
    {
      title: "ER Management",
      description: "A web-based ERP platform for managing purchase orders, sales, payments, reports, leads, and merchants. Designed for seamless navigation and consistent UI across modules, ensuring efficient warehouse and enterprise operations.",
   

      tech: "Vue 3 + Vuetify 3",
      // image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      image: "../assets/Theaterbites.png",

      placeholder: "https://via.placeholder.com/800x450/eeeeee/cccccc?text=Loading...",
      links: [
        { label: "Demo", url: "#", icon: "mdi-open-in-new" },
        { label: "Code", url: "#", icon: "mdi-github" }
      ]
    },
    {
      title: "CPQ",
      description: "Developed a pricing and quote automation tool for a Fire Protection Company, streamlining product setup, pricing, and quote generation. Improved sales efficiency and customer satisfaction through a modern CPQ solution.",
	

      tech: "Vue2 + Vuetify2",
      // image: "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      image: "../assets/Theaterbites.png",

      placeholder: "https://via.placeholder.com/800x450/eeeeee/cccccc?text=Loading...",
      links: [
        { label: "Demo", url: "#", icon: "mdi-open-in-new" },
        { label: "Code", url: "#", icon: "mdi-github" }
      ]
    }
  ];
  </script>
  
  <style scoped>
  .gradient-text {
    background: linear-gradient(45deg, #1976D2, #00C853);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    display: inline-block;
  }
  
  .project-card {
    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    transform: translateY(20px);
    opacity: 0;
    animation: cardEntrance 0.6s ease forwards;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  
  @keyframes cardEntrance {
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  
  .image-container {
    position: relative;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .project-image {
    transition: transform 0.5s ease;
  }
  
  .image-zoom {
    transform: scale(1.05);
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .overlay-visible {
    opacity: 1;
  }
  
  .view-btn {
    transform: translateY(20px);
    opacity: 0;
    transition: all 0.3s ease;
  }
  
  .btn-visible {
    transform: translateY(0);
    opacity: 1;
  }
  
  .see-more-btn {
    transition: all 0.3s ease;
    border-radius: 24px;
    padding: 0 24px;
  }
  
  .see-more-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(25, 118, 210, 0.3);
  }
  
  /* Responsive adjustments */
  @media (max-width: 960px) {
    .project-card {
      margin-bottom: 24px;
    }
  }
  </style>