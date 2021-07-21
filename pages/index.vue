<template>
  <div>
    <Topbar title="Home" />
    <div class="grid grid-cols-5 gap-5 mt-10">
      <Card
        v-for="item in 45"
        :key="item"
        ref="card"
        class="card relative translate-y-[-15px] opacity-0"
        >Sharing Sessions</Card
      >
    </div>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  data: () => ({
    users: [],
  }),

  mounted() {
    this.animatedCard()
  },

  methods: {
    animatedCard() {
      this.$gsap.to('.card', {
        stagger: 0.05,
        y: 0,
        autoAlpha: 1,
      })
    },
  },
}
</script>
