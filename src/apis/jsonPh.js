import axios from "axios";
const BASE_URL = 'http://3.144.167.227:8080';

export default axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})