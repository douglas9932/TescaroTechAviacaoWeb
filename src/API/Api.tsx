import axios from "axios";

const Api = axios.create({
  baseURL: "http://localhost:56624",
});

export default Api;