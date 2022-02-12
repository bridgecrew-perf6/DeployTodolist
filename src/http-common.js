import axios from "axios";

export default axios.create({
  baseURL: "https://todosoftdev.herokuapp.com/api",
  headers: {
    "Content-type": "application/json"
  }
});