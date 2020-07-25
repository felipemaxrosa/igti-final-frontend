import axios from "axios";

//Define a URL base da origem para consumo do servico
export default axios.create({
  baseURL: "https://financial-control-backend.herokuapp.com",
  headers: {
    "Content-type": "application/json",
  },
});
// export default axios.create({
//   baseURL: "http://localhost:3001",
//   headers: {
//     "Content-type": "application/json",
//   },
// });
