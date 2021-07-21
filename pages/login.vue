<template>
  <div
    class="
      w-full
      min-h-screen
      bg-indigo-900
      relative
      flex flex-col
      justify-center
      items-center
    "
  >
    <div class="bg-white p-7 rounded flex flex-col">
      <div class="text-3xl text-center font-bold mb-7 text-gray-900">Login</div>
      <div class="space-y-4 flex flex-col">
        <input
          type="email"
          autocomplete="email"
          name="email"
          required="true"
          placeholder="email"
          v-model="email"
        />
        <input type="password" placeholder="password" v-model="password" />
        <div v-if="msg" class="text-sm text-center text-red-500">{{ msg }}</div>
        <button
          @click="performLogin"
          class="bg-indigo-500 text-white rounded text-sm py-2"
        >
          Login
        </button>
        <nuxt-link class="text-center text-sm" to="/register"
          >register</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware({ $auth, redirect }) {
    if ($auth.loggedIn) redirect('/')
  },

  data: () => ({
    email: '',
    password: '',
    msg: '',
  }),

  methods: {
    async performLogout() {},
    async performLogin() {
      console.log(this.email, this.password)
      try {
        const resp = await this.$auth.loginWith('local', {
          data: {
            email: this.email,
            password: this.password,
          },
        })
        this.msg = resp.data.msg
        let token = resp.data.token
        console.log('the resp', token)

        if (token) {
          this.$axios.setHeader('Authorization', `Bearer ${token}`)
        }

        console.log('auth', this.$auth.user)
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style lang="postcss" scoped>
input {
  @apply px-4 py-2 rounded bg-gray-50 w-full;
}
</style>
