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

}
