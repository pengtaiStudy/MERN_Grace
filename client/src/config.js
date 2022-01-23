import axios from "axios"

export const axiosInstance = axios.create({
    baseURL: "https://sue-dev-blog.herokuapp.com/"
})