<template>
  <div
    class="
      w-[15%]
      p-10
      flex flex-col
      items-start
      justify-between
      dark:bg-gray-900
    "
  >
    <div>
      <Logo />
      <SidebarMenu />
    </div>
    <div class="space-y-7 dark:text-white">
      <button
        class="flex space-x-2 items-center"
        @click="$store.dispatch('toggleDarkMode')"
      >
        <div>
          <MoonIcon v-if="!$store.state.darkMode" size="1x" />
          <SunIcon v-else size="1x" />
        </div>
        <div>Darkmode</div>
      </button>
      <button class="flex space-x-2 items-center" @click="performLogout">
        <LogOutIcon size="1x" />
        <div>Logout</div>
      </button>
    </div>
  </div>
</template>

<script>
import { LogOutIcon } from 'vue-feather-icons'
import { MoonIcon } from 'vue-feather-icons'
import { SunIcon } from 'vue-feather-icons'
export default {
  components: {
    LogOutIcon,
    MoonIcon,
    SunIcon,
  },
  methods: {
    async performLogout() {
      await this.$auth.logout()
      this.$router.replace('/login')
    },
  },
}
</script>
