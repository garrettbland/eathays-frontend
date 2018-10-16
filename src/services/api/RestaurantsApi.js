import axios from 'axios'

export default {

  GetAllRestaurants(){
    return axios.get('/restaurants')
      .then(response => {
        // Login that concerns only the API here and returns the promise
        return response.data
      })
  },

  GetSingleRestaurant(slug){
    return axios.get('/restaurants/findOne?filter={"where":{"slug":"'+slug+'"}}')
      .then(response => {
        // Login that concerns only the API here and returns the promise
        return response.data
      })
  },

  GetMenuItems(id){
    return axios.get('/restaurants/'+id+'/menus')
      .then(response => {
        // Login that concerns only the API here and returns the promise
        return response.data
      })
  },

  GetSpecials(day){
    return axios.get('/specials?filter={"where": {"and": [{"day": "'+day+'"},{"active":"true"}] }}')
      .then(response => {
        // Login that concerns only the API here and returns the promise
        return response.data
      })
  },

  SearchRestaurants(keywords){
    //case insensative search using https://loopback.io/doc/en/lb2/Where-filter.html#like-and-nlike-insensitive
    return axios.get('/restaurants?filter={"where": {"title": {"like": "'+keywords+'" ,"options":"i"}}}')
      .then(response => {
        return response = response.data
      })
  },

  GetRandomRestaurant(){
    //case insensative search using https://loopback.io/doc/en/lb2/Where-filter.html#like-and-nlike-insensitive
    return axios.get('/restaurants/random')
      .then(response => {
        return response = response.data
      })
  }

}
