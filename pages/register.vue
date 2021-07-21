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
      <div class="text-3xl text-center font-bold mb-7 text-gray-900">
        Register
      </div>
      <div class="flex flex-col space-y-4">
        <input
          type="text"
          name="username"
          required="true"
          placeholder="username"
          v-model="username"
        />
        <input
          type="email"
          autocomplete="email"
          name="email"
          required="true"
          placeholder="email"
          v-model="email"
        />
        <input type="password" placeholder="password" v-model="password" />
        <input type="password" placeholder="password" v-model="password2" />
        <div v-if="msg" class="text-sm text-center text-red-500">{{ msg }}</div>
        <button
          @click="performRegister"
          class="bg-indigo-500 text-white rounded text-sm py-2"
        >
          Register
        </button>
        <nuxt-link class="text-center text-sm" to="/login">login</nuxt-link>
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
    password2: '',
    username: '',
    msg: '',
  }),

  methods: {
    async performLogout() {},
    async performRegister() {
      try {
        const resp = await this.$axios.$post('/api/auth/register', {
          email: this.email,
          password: this.password,
          password2: this.password2,
          username: this.username,
        })
        console.log('resp', resp)
        this.msg = resp.msg

        if (resp.token) {
          await this.$auth.loginWith('local', {
            data: {
              email: this.email,
              password: this.password,
            },
          })
          this.$axios.setHeader('Authorization', `Bearer ${token}`)
          this.$router.replace('/')
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
