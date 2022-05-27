<template>
  <div class="block">
    <span>Исполнитель</span>
    <form name="member">
      <select name="member" v-model="member">
        <option disabled value="">Выберите один из вариантов</option>
        <option value="Исполнитель 1">Исполнитель 1</option>
        <option value="Исполнитель 2">Исполнитель 2</option>
        <option value="Исполнитель 3">Исполнитель 3</option>
      </select>
    </form>
    </div>
  <div class="buttons">
    <router-link :to="{name: 'third'}">Назад</router-link>
    <router-link :to="{name: member ? 'fifth' : 'fourth'}" :class="{disable: member }" @click="addMember(member)">Далее</router-link>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  data() {
    return {
      member: ""
    }
  },
  methods:{
    ...mapMutations(['addMember'])
  }
}
</script>

<style scoped>
option{
  height: 45px;
  width: auto;
}
</style>