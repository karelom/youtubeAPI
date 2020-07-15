<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <table class="rwd-table" v-for='item in items' :key='item.id'>
          <tr>
            <th><img :src='item.snippet.thumbnails.medium.url' /></th>
            <td> {{ item.snippet.description }} </td>
          </tr>
          <tr>
            <td> {{ item.snippet.title }} </td>
            <td>  
              <vue-star animate="animated bounceIn" color="#F05654">
                <a slot="icon.gif" class="fa fa-heart" @click="handleClick"></a>
              </vue-star>
            </td>
          </tr>
      </table>  
    </div>
    <button v-on:click="prev">prev</button>
    <button v-on:click="next">next</button>
  </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/vue-resource@1.5.1"></script>

<script>
import  VueResource  from '@/resource'
//import VueStar from 'vue-star'

export default {
    name: 'Home',
    props: {
        msg: String
    },
    data () {
        return {
            posts: [],
            items: []
      }
    },
    methods: {
      handleClick () {
          // nothing
      },
       next () {
          this.$http.get('https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=12&regionCode=TW&key=AIzaSyAIp71F01elALgrI4mGwyNnS8RyKP61BeE&pageToken=' + this.posts.nextPageToken)
            .then( function(response) {
            this.posts = response.body;
            this.items = response.body.items;
            console.log("Response: ", response);
        })
        .catch( function(error) {
            console.log('Error: ', error);
        })
       },// 下一頁
       prev () {
          this.$http.get('https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=12&regionCode=TW&key=AIzaSyAIp71F01elALgrI4mGwyNnS8RyKP61BeE&pageToken=' + this.posts.prevPageToken)
            .then( function(response) {
            this.posts = response.body;
            this.items = response.body.items;
            console.log("Response: ", response);
        })
        .catch( function(error) {
            console.log('Error: ', error);
        })
       }// 上一頁
    },
    mounted () {        
        this.$http.get('https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=12&regionCode=TW&key=AIzaSyAIp71F01elALgrI4mGwyNnS8RyKP61BeE')
        .then( function(response) {
            this.posts = response.body;
            this.items = response.body.items;
            console.log("Response: ", response);
        })
        .catch( function(error) {
            console.log('Error: ', error);
        })// 首頁
    }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
@media screen and (min-width: 640px){
    table {
      margin: 40px;
    }
    .rwd-table th, td {
      border: solid black;
    }
}

</style>
