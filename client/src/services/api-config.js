import axios from "axios";

// set baseurl for development on backend
// conditional if development use localhost if production use heroku
const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://fithub-app-api.herokuapp.com/"
    : "http://localhost:3000";

// set instance of axios
const api = axios.create({
  baseURL: baseUrl,
});

export default api;
