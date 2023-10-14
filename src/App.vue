<template>
  <div>
    <NavBar />

    <main>
      <router-view></router-view>
    </main>

    <Footer />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    Footer,
  },
}
</script>

<style src=""></style>
