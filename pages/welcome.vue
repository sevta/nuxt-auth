<template>
  <div
    class="
      w-full
      min-h-screen
      overflow-hidden
      bg-indigo-800
      flex flex-col
      text-white
      items-center
      justify-center
    "
  >
    <img class="w-64 mb-6" src="@/assets/images/hero.svg" alt="" />
    <div class="mb-6 text-7xl font-bold">Welcome</div>
    <div class="text-4xl">{{ $auth.user.user.username }}</div>
    <nuxt-link to="/" class="bg-black px-5 py-1 mt-4 text-sm rounded">
      Dashboard
    </nuxt-link>
    <button
      @click="performLogout"
      class="bg-indigo-900 px-5 py-1 mt-4 text-sm rounded"
    >
      Logout
    </button>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  mounted() {
    console.log(this.$auth.user)
  },
  methods: {
    async performLogout() {
      try {
        await this.$auth.logout()
        this.$router.replace('/login')
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>
