<template>
  <div
    class="
      card
      bg-white
      border-l-8 border-red-200
      dark:border-[#E5FBB8]
      shadow-sm
      rounded
      p-5
      h-[100px]
      dark:text-black
    "
  >
    <slot />
  </div>
</template>

<script>
export default {
  inheritAttrs: true,
}
</script>
