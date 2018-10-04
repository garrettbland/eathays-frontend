<template>
  <div>
    <h1 v-if="loading">Loading...</h1>
    <h1>{{restaurant.title}}</h1>
  </div>
</template>

<script>
import RestaurantApi from '@/services/api/RestaurantApi'
export default {
  name: 'Restaurant',
  data(){
    return{
      restaurant: {},
      loading: true
    }
  },
  methods:{
    read(){
      let slug = this.$route.params.slug
      // GET article data
      RestaurantApi.GetSingleRestaurant(slug)
        .then(restaurant => {
          this.restaurant = restaurant
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
