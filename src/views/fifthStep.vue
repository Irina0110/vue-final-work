<template>
  <div class="block">
    <span>Приложения</span>
    <input type="file"  multiple @change="addFiles">
  </div>
  <div class="buttons">
    <router-link :to="{name: 'fourth'}">Назад</router-link>
    <router-link :to="{name: 'finalPage'}" @click="addApps(elems)">Создать</router-link>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  data(){
    return{
      allFiles: [],
      elems: []

    }
  },
  methods: {
    addFiles(event){
      this.allFiles = event.target.files;
      for(let elem of this.allFiles){
        this.elems.push(`${elem.name} `);
      }
      console.log(this.elems)
    },
     ...mapMutations(['addApps'])

  }
}
</script>

<style scoped>

</style>