import axios from 'axios'

export default axios.create({
    baseURL: "http://www.omdbapi.com"
})

// http://www.omdbapi.com/?i=tt3896198&apikey=17344140