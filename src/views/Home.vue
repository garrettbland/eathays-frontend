<template>
  <div>
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <p>Loading: {{loading}}</p>
    <ul>
      <li v-for="restaurant in restaurants">
        <router-link :to="{ name: 'restaurant', params: { slug: restaurant.slug }}">{{ restaurant.title }}{{ restaurant.slug}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import RestaurantApi from '@/services/api/RestaurantApi'
export default {
  name: 'Home',
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
      RestaurantApi.GetAllRestaurants()
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
