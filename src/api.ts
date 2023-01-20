import axios from "axios";

const BASE_URL = 'https://www.populorh.com.br/api/v1'

export default axios.create({
    baseURL: BASE_URL,
    withCredentials: true
})