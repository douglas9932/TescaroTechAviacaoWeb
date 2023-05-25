import axios from "axios";

let URLWebAPI = "http://172.16.0.20:53533"

const Api = axios.create({
  baseURL: URLWebAPI,
});

export default Api;