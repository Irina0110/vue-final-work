<template>
  <div class="block">
    <span>Введите название задачи</span>
    <input type="text" v-model="title">
  </div>
  <div class="buttons">
    <router-link :to="{name: title ? 'second' : 'first'}" :class="{disable: title }" @click="addTitle(title)">Далее</router-link>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  data() {
    return {
      title: ""
    }
  },
  methods:{
    ...mapMutations(['addTitle'])
  }
}
</script>

<style scoped>
.buttons{
  justify-content: flex-end;
}
</style>