import axios from "axios";

axios.defaults.baseURL =
  "https://travel-social-backend-87f0ae7bbbb1.herokuapp.com/";

axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;
