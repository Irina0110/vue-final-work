<template>
  <nav>
    <router-link v-for="link in menuLinks"
                 :to="link.href"
                 :key="link.href"> <!--используется при отрисовке в цикле, значения должны быть уникальными, без этого атрибута сборка не пропустит-->
      {{link.title}}
    </router-link>
  </nav>
</template>

<script>
export default {
  props:{
    menuLinks: Array
  }
}
</script>

<style scoped>

</style>