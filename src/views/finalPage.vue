<template>
  <span>Задача: {{this.$store.state.titleTask}}</span>
  <p>Описание: {{this.$store.state.descriptionTask}}</p>
  <p>Исполнитель: {{this.$store.state.members}}</p>
  <p>Время на выполнение (в часах):{{this.$store.state.timeTask}}</p>
  <p>Приложения:
    <span class="apps" v-for="file in this.$store.state.apps" :key="file">{{ file }}</span>
  </p>
  <div class="buttons">
    <router-link :to="{name: 'first'}">Новая задача</router-link>
  </div>
</template>

<script>
export default {
  data(){
    return{
      apps: this.$store.state.apps
    }
  }
}
</script>

<style scoped>
.apps{
  font-size: inherit;
}
.buttons{
  justify-content: flex-end;
}
</style>