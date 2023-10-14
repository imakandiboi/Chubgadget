<template>
  <div class="main-page">
    <div class="desktop-carousel">
      <div id="desktopCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
        <!-- Slides -->
        <div class="carousel-inner">
          <div v-for="(image, index) in carouselImages" :key="index" class="carousel-item" :class="{ active: index === 0 }">
            <img :src="image.src" class="d-block w-100" :alt="'Slide ' + (index + 1)" />
          </div>
        </div>

        <!-- Custom Previous and Next Buttons -->
        <a class="carousel-control-prev" href="#desktopCarousel" role="button" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">back</span>
        </a>
        <a class="carousel-control-next" href="#desktopCarousel" role="button" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">next</span>
        </a>
      </div>
    </div>

    <div class="mobile-carousel">
      <!-- Mobile carousel goes here -->
      <div id="mobileCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
        <!-- Slides -->
        <div class="carousel-inner">
          <div v-for="(image, index) in carouselImages" :key="index" class="carousel-item" :class="{ active: index === 0 }">
            <img :src="image.src" class="d-block w-100" :alt="'Slide ' + (index + 1)" />
          </div>
        </div>

        <!-- Custom Previous and Next Buttons -->
        <a class="carousel-control-prev" href="#desktopCarousel" role="button" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">back</span>
        </a>
        <a class="carousel-control-next" href="#desktopCarousel" role="button" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">next</span>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

export default {
  name: 'MainPage',

  data() {
    return {
      carouselImages: [
        { src: require('@/assets/images/bg.png') },
        { src: require('@/assets/images/bg2.jpg') },
        { src: require('@/assets/images/bg3.jpg') },
        // Add more image objects here

        //add more image object line
      ],
    }
  },
}
</script>

<style scoped>
/* Style the main page container */
.main-page {
  position: relative;
}

/* Set the height of the carousel for desktop */
.desktop-carousel {
  height: 80vh; /* Adjust as needed */
}

/* Style the mobile carousel (to be added) */
.mobile-carousel {
  display: none; /* Hide mobile carousel initially */
}

/* ... */
.carousel-item img {
  height: 80vh; /* Set the height to 90% of the viewport height */
  object-fit: cover; /* Maintain image aspect ratio and cover entire container */
}
/* ... */

/* Add media query for mobile view */
@media (max-width: 767px) {
  .desktop-carousel {
    display: none; /* Hide desktop carousel in mobile view */
  }
  .mobile-carousel {
    display: block; /* Show mobile carousel */
    /* Additional styling for the mobile carousel */
  }
}
</style>
