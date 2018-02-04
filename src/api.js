import axios from 'axios'
axios.defaults.baseURL = 'https://api.coinmarketcap.com/v1'

export const api = {
  // loadItems() {
  //   return ["item1", "item2"]
  // },

  loadItems() {
    return axios
      .get('/ticker/')
      .then(response => response.data)
      .catch(error => error)
  },
}