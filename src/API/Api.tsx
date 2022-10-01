import axios from "axios";

const Api = axios.create({
  baseURL: "http://172.16.0.20:53533",
});

export default Api;