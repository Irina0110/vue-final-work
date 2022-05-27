<template>
  <nav>
    <router-link v-for="link in menuLink" :key="link.href" :to="link.href">
      {{ link.title }}
    </router-link>
  </nav>
</template>

<script>
export default {
 props:{
   menuLink: Array
 }
}
</script>

<style scoped>
a {
  pointer-events: none;
}
</style>