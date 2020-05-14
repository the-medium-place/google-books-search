import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const SINGLURL = "https://www.googleapis.com/books/v1/volumes/"


const APIKEY = "&key=AIzaSyAGK1tMt8qfphx82CGJ5ncckw6Tqu1bKIQ";


export default {
  search: function(query) {
    console.log(BASEURL + query + APIKEY)
    return axios.get(BASEURL + query + APIKEY);
  },

  searchOne: function(query) {
    return axios.get(SINGLURL + query + APIKEY)
  }
};



// https://www.googleapis.com/books/v1/volumes/WVLXDwAAQBAJ&key=AIzaSyAGK1tMt8qfphx82CGJ5ncckw6Tqu1bKIQ

// https://www.googleapis.com/books/v1/volumes?q=flowers&projection=lite&key=AIzaSyAGK1tMt8qfphx82CGJ5ncckw6Tqu1bKI