import axios from "axios";


const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "43c3835c7153d2778c2bd7525b4abfe9",
  },
  headers: {
    accept: "application/json",
  },
});

export default instance;
