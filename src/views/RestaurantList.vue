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
      loading:true
    }
  },
  methods:{
    read(){
      RestaurantsApi.GetAllRestaurants()
          .then(restaurants => {
            this.restaurants = restaurants
          })
          .catch(error => console.log(error))
          .finally(() => {
            // wether error or not, remove loading
            this.loading = false
          })
      }
  },
  mounted(){
    this.read()
  }
}
</script>
