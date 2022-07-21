import axios from 'axios';

const baseURL = process.env.NODE_ENV === "development"
  ? "http://localhost:3001/"
  : "http://example.com"

const ax = axios.create({
   withCredentials: true,
})

export default ax;