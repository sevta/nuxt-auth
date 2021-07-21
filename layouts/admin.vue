<template>
  <div class="admin w-full h-screen overflow-hidden flex items-stretch">
    <Sidebar />
    <div
      class="
        p-10
        bg-red-100
        dark:bg-gray-900 dark:text-white
        w-full
        overflow-y-auto
      "
    >
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
}
</script>
