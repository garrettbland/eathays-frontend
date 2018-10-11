<template>
  <div>
    <h1 v-if="loading">Loading...</h1>
    <h1>{{restaurant.title}}</h1>
    <hr>
    <h2>Menu</h2>
    <ul>

      <li v-for="item in menu">
        {{item.title}} - {{item.description}}
      </li>
    </ul>
  </div>
</template>

<script>
import RestaurantsApi from '@/services/api/RestaurantsApi'
export default {
  name: 'Restaurant',
  data(){
    return{
      restaurant: {},
      menu:[],
      loading: true
    }
  },
  methods:{
    read(){
      let slug = this.$route.params.slug
      // GET article data
      RestaurantsApi.GetSingleRestaurant(slug)
        .then(restaurant => {
          this.restaurant = restaurant

          //get menu
          this.getMenuItems(restaurant.id)
        })
        .catch(error => console.log(error))
        .finally(() => {
          // wether error or not, remove loading
          this.loading = false
        })

    },
    getMenuItems(id){
      RestaurantsApi.GetMenuItems(id)
      .then(menu => {
        this.menu = menu
      })
      .catch(error => console.log(error))
      .finally(() => {
        // wether error or not, remove loading
        //this.loading = false
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
