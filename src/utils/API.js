import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const SINGLURL = "https://www.googleapis.com/books/v1/volumes/"
const APIKEY = process.env.REACT_APP_GOOGLE_API_KEY;
// LOCALLY USE http://localhost:3001

const API_URL = 'http://localhost:3001/api/favbooks'
// const API_URL = 'https://awesome-google-books-search.herokuapp.com/api/favbooks';


export default {
  search: function(query) {
    console.log(BASEURL + query + APIKEY)
    console.log(APIKEY);
    return axios.get(BASEURL + query + APIKEY);
  },

  searchFavs: function() {
    // return axios.get("https://awesome-google-books-search.herokuapp.com/api/favbooks")
    // return axios.get(SINGLURL + query + APIKEY)
    return axios.get(API_URL);
  },

  populateFavs: function(query) {
    return axios.get(SINGLURL + query + APIKEY);
  },

  addFav: function(book) {
    // return axios.post("https://awesome-google-books-search.herokuapp.com/api/favbooks", book)
    return axios.post(API_URL, book)
  },

  deleteFav: function (book) {
    console.log("book _id" + book);
    // return axios.delete("https://awesome-google-books-search.herokuapp.com/api/favbooks/" + book)
    return axios.delete(API_URL + '/' + book);
  }
};
