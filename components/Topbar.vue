<template>
  <div class="w-full justify-between">
    <div class="text-xl">{{ title }}</div>
    <div>
      <slot name="right" />
    </div>
  </div>
</template>

<script>
export default {
  props: ['title'],
}
</script>
