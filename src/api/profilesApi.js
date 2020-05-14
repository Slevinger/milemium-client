import axios from "axios";

const baseURL = "https://milenium-server.herokuapp.com";

const instance = axios.create({
  baseURL
});

export default instance;
