import axios from "axios";

// Development Server
export default axios.create({
  baseUrl: "http://127.0.0.1:8000",
});

// Production Server
// export default axios.create({
//   baseURL: ""
// })
