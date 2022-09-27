import axios from "axios";

const Api = axios.create({
  baseURL: "https://localhost:44333",
});

export default Api;