<template>
  <div>
    <Topbar title="Users" />
    <div class="mt-10">
      <div class="flex" v-for="(user, key) in users" :key="key">
        {{ user.username }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  data: () => ({
    users: [],
  }),
  async fetch() {
    try {
      let users = await this.$axios.$get('/api/users')
      this.users = users.users
    } catch (error) {
      console.log(error)
    }
  },
  mounted() {},
  methods: {
    async getUsers() {},
  },
}
</script>
