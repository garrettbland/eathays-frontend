<template>
  <div>
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <p>Loading: {{loading}}</p>
    <ul>
      <!-- <li v-for="special in specials">
        <router-link :to="{ name: 'restaurant', params: { slug: restaurant.slug }}">{{ restaurant.title }}{{ restaurant.slug}}</router-link>
      </li> -->
      <li v-for="special in specials">
        <a href="#" v-on:click="showSpecial(special)">{{special.title}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import RestaurantsApi from '@/services/api/RestaurantsApi'
export default {
  name: 'Home',
  components: {

  },
  data(){
    return{
      specials:[],
      loading:true
    }
  },
  methods:{
    fetch(){
      //create function to get current day and return day
      var day = "Monday"
      RestaurantsApi.GetSpecials(day)
          .then(specials => {
            this.specials = specials
          })
          .catch(error => console.log(error))
          .finally(() => {
            // wether error or not, remove loading
            this.loading = false
          })
    },
      showSpecial: function(special){
        window.alert(special.title + special.description)
      }
  },
  mounted(){
    this.fetch()
  }
}
</script>
