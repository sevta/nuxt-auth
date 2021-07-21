<template>
  <div>
    <Topbar :title="'Profile, ' + $auth.user.user.email" />
    <div class="mt-10">
      <pre class="text-mono text-sm">
        {{ $auth.user.user }}
      </pre>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'admin',
}
</script>
