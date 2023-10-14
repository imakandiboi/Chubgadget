<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <section>
      <Banner />
    </section>
    <section>
      <CounterSection />
    </section>
  </div>
</template>

<script>
import Banner from '@/components/Pages/Homepage/Banner.vue'
import CounterSection from '@/components/Pages/Homepage/CounterSection.vue'

export default {
  name: 'HomePage',
  components: {
    Banner,
    CounterSection,
  },
}
</script>

<style></style>
