<template>
  <span>Введите описание задачи</span>
  <input type="text" v-model.lazy="title">
</template>

<script>
export default {
  data(){
    return {
      title: ""
    }
  }
}
</script>

<style scoped>

</style>