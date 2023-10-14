<template>
  <div class="counter-section">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="counter-box">
            <h2>{{ formattedCount1 }}</h2>
            <p>Counter 1</p>
          </div>
        </div>
        <div class="col">
          <div class="counter-box">
            <h2>{{ formattedCount2 }}</h2>
            <p>Counter 2</p>
          </div>
        </div>
        <div class="col">
          <div class="counter-box">
            <h2>{{ formattedCount3 }}</h2>
            <p>Counter 3</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CounterSection',
  data() {
    return {
      targetCount1: 42, // Set your target number
      targetCount2: 75, // Set your target number
      targetCount3: 123, // Set your target number
      count1: 0,
      count2: 0,
      count3: 0,
    }
  },
  computed: {
    formattedCount1() {
      return this.count1.toFixed(0)
    },
    formattedCount2() {
      return this.count2.toFixed(0)
    },
    formattedCount3() {
      return this.count3.toFixed(0)
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const scrollY = window.scrollY
      const triggerOffset = this.$el.offsetTop - window.innerHeight + 200
      if (scrollY > triggerOffset) {
        this.startCounting()
      }
    },
    startCounting() {
      if (this.count1 < this.targetCount1) {
        this.count1 += 1
      }
      if (this.count2 < this.targetCount2) {
        this.count2 += 1
      }
      if (this.count3 < this.targetCount3) {
        this.count3 += 1
      }
      requestAnimationFrame(this.startCounting)
    },
  },
}
</script>

<style scoped>
.counter-section {
  margin: 100px 10pxc;

  padding: 50px 0;
}

.counter-box {
  text-align: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
