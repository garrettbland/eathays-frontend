<template>
  <div>
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <p>Loading: {{loading}}</p>
      <h1>Roulette</h1>
      <h3>Random restaurant title: {{restaurant.title}}</h3>
      <button v-on:click="fetch()">Random Restaurant</button>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import RestaurantsApi from '@/services/api/RestaurantsApi'
import moment from 'moment'
export default {
  name: 'Roulette',
  components: {

  },
  data(){
    return{
      restaurant:{},
      loading:true
    }
  },
  methods:{
    fetch(){
      RestaurantsApi.GetRandomRestaurant()
          .then(response => {
            this.restaurant = response.restaurant
          })
          .catch(error => console.log(error))
          .finally(() => {
            // wether error or not, remove loading
            this.loading = false
          })
    },
    showSpecial(special){
      window.alert(special.title + special.description)
    }
  },
  mounted(){
    this.fetch()
  }
}
</script>
