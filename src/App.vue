<template>
  <div id="app">
    <v-header></v-header>
    <!--<img src="./assets/logo.png">-->
    <router-view></router-view>
  </div>
</template>

<script>
  import header from './components/Header'

  export default {
    name: 'app',
    data() {
      return {
        user: {
          userName: "11",
          passWord: "11"
        }
      }
    },
    components: {
      'v-header': header
    }
  }
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /*margin-top: 60px;*/
  }
</style>
