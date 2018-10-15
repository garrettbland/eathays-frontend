<template>
  <div>
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <p>Loading: {{loading}}</p>
    <ul>

      <li v-for="restaurant in restaurants">
        <router-link :to="{ name: 'restaurant', params: { slug: restaurant.slug }}">{{ restaurant.title }}</router-link>
      </li>
    </ul>
    <div>
        <input type="text" v-model="keywords" >
        <button v-on:click="fetch(keywords)">Search</button>
        <ul v-if="results.length > 0">
            <li v-for="result in results" >
              <router-link :to="{ name: 'restaurant', params: { slug: restaurant.slug }}">{{ restaurant.title }}</router-link>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import RestaurantsApi from '@/services/api/RestaurantsApi'
export default {
  name: 'RestaurantList',
  components: {

  },
  data(){
    return{
      restaurants:[],
      keywords:null,
      results:[],
      loading:true
    }
  },
  methods:{
    fetch(){
      RestaurantsApi.GetAllRestaurants()
          .then(restaurants => {
            this.restaurants = restaurants
          })
          .catch(error => console.log(error))
          .finally(() => {
            // wether error or not, remove loading
            this.loading = false
          })
      },
      search() {
      RestaurantsApi.SearchRestaurants(this.keywords)
        .then(response => {
          this.results = response
        })
        .catch(error => console.log(error))
        .finally(() => {
        })
    },
  },
  mounted(){
    this.fetch()
  }
}
</script>
