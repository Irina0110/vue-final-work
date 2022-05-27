<template>
  <div class="block">
    <span>Введите описание задачи</span>
    <input type="text" v-model="description">
  </div>
  <div class="buttons">
    <router-link :to="{name: 'first'}">Назад</router-link>
    <router-link :to="{name: description ? 'third' : 'second'}" :class="{disable: description }" @click="addDescription(description)">Далее</router-link>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  data() {
    return {
      description: ""
    }
  },
  methods:{
    ...mapMutations(['addDescription'])
  }
}

</script>

<style scoped>

</style>