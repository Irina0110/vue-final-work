<template>
    <main-page :menu-link="links"/>
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
        ]
      }
    }
  }
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap');

*{ font-family: 'Raleway', sans-serif;
  color: #331B04;
}
a,
.link{
  font-size: 20px;
  text-decoration: none;
  background-color: #91BD80;
  width: auto;
  height: auto;
  border-radius: 10px;
  padding: 15px 25px;
  filter: drop-shadow(0 4px 4px rgb(0, 0, 0, 0.2));
}
.buttons a{
  background-color: #91BD80;
}
span{
  font-size: 24px;
}
.router-link-active{
  background-color: #628B51;
}
.disable{
  background-color: #628B51 !important;
}
nav{
  margin-bottom: 50px;
  display: flex;
  justify-content: space-evenly;

}
#app{
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
}
.block{
  display: grid;
  margin-bottom: 30px;
}
.block span{
  margin-bottom: 10px;
}
.buttons{
  display: flex;
  justify-content: space-between;
}
input,
select{
  background-color: rgba(145, 189, 128, 0.4);
  border: none;
  filter: drop-shadow(0 4px 4px rgb(0, 0, 0, 0.2));
  height: 45px;
}
input:focus {
  outline: 0;
}
</style>
