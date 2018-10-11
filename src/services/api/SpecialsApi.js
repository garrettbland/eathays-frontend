import axios from 'axios'

export default {

  GetAllSpecials(day){
    return axios.get('/specials?filter={"where": {"and": [{"day": "'+day+'"},{"active":"true"}] }}')
      .then(response => {
        // Login that concerns only the API here and returns the promise
        return response.data
      })
  },

}
