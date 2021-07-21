<template>
  <div class="flex flex-col">
    <nuxt-link
      :to="item.path"
      v-for="item in menus"
      :key="item"
      class="py-3 capitalize dark:text-white"
      >{{ item.label }}</nuxt-link
    >
  </div>
</template>

<script>
import menus from '@/lib/menus'

export default {
  data: () => ({
    menus,
  }),
}
</script>
