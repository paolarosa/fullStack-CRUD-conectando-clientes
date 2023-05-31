import axios from "axios"

export const api = axios.create({
  baseURL: "https://challenge-fullstack-interview.onrender.com",
  timeout: 5000,
})