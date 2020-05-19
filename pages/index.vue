<template>
<div>
  <nuxt-link to="/SHome">Login</nuxt-link>
</div>
</template>
<script>
export default {
  layout: 'LLayout',
  // OR
  layout (context) {
    return 'LLayout'
  }
}
</script>