// https://www.npmjs.com/package/axios
import axios from "axios";

export default axios.create({
  baseURL: process.env.API_URL || "http://localhost:3004",
  responseType: "json"
});