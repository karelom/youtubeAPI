<template>
  <div id="app">
      <!--<vue-star animate="animated bounceIn" color="#F05654">
          <img slot="icon" alt="Vue logo" src="./assets/logo.png">
      </vue-star>-->
      
      <div id="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/favorite">Favorite</router-link>
      <router-view></router-view> 
    </div>
  </div>
</template>

<script>
//import VueStar from 'vue-star'

export default {
  name: 'App',
  components: {
    //VueStar
  },
  methods: {
    handleClick () {
      // nothing
    }
  }
}// 防止重複出現
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
