import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const SINGLURL = "https://www.googleapis.com/books/v1/volumes/"
const APIKEY = "&key=AIzaSyAGK1tMt8qfphx82CGJ5ncckw6Tqu1bKIQ";
// LOCALLY USE http://localhost:3001

export default {
  search: function(query) {
    console.log(BASEURL + query + APIKEY)
    return axios.get(BASEURL + query + APIKEY);
  },

  searchFavs: function() {
    return axios.get("https://awesome-google-books-search.herokuapp.com/api/favbooks")
    // return axios.get(SINGLURL + query + APIKEY)
  },

  populateFavs: function(query) {
    return axios.get(SINGLURL + query + APIKEY);
  },

  addFav: function(book) {
    return axios.post("https://awesome-google-books-search.herokuapp.com/api/favbooks", book)

  },

  deleteFav: function (book) {
    console.log("book _id" + book);
    return axios.delete("https://awesome-google-books-search.herokuapp.com/api/favbooks/" + book)
  }
};




// https://www.googleapis.com/books/v1/volumes/WVLXDwAAQBAJ&key=AIzaSyAGK1tMt8qfphx82CGJ5ncckw6Tqu1bKIQ

// https://www.googleapis.com/books/v1/volumes?q=flowers&projection=lite&key=AIzaSyAGK1tMt8qfphx82CGJ5ncckw6Tqu1bKI