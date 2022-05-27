<template>
  <div class="block">
    <span>Время на выполнение (в часах)</span>
    <input type="number" v-model="time">
  </div>
  <div class="buttons">
    <router-link :to="{name: 'second'}">Назад</router-link>
    <router-link :to="{name: time ? 'fourth' : 'third'}" :class="{disable: time }" @click="addTime(time)">Далее</router-link>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  data() {
    return {
      time: ""
    }
  },
  methods:{
    ...mapMutations(['addTime'])
  }
}

</script>

<style scoped>

</style>