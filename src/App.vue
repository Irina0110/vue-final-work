<template>
  <nav>
    <main-page :menu-links="links" />
  </nav>
  <router-view/>
</template>

<script>
  import MainPage from "@/components/mainPage";
  export default {
    components: {MainPage},
    data(){
      return {
        links: [
          {title: "1 step", href:"/first"},
          {title: "2 step", href:"/second"},
          {title: "3 step", href:"/third"},
          {title: "4 step", href:"/fourth"},
          {title: "5 step", href:"/fifth"},
          {title: "Final", href:"/final"},
        ],
        titleTask: '',
        descriptionTask: '',
        members: [],
        timeTask: null,
        apps: []
      }
    }
  }
</script>

<style>

</style>
