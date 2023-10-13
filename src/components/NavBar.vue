<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="#">C-hub Gadget</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">HOME</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">SMARTPHONE</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">LAPTOPS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">GAMES</a>
          </li>

          <!-- Add more navigation items here -->

          <li class="nav-item">
            <a class="nav-link" href="#">SPEAKERS</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">HEADPHONES</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">MACBOOK</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">GAMING PC</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<style scoped>
/* Add any custom styling here */
</style>
