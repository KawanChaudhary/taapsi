import axios from "axios";

const BASE_URL = "http://localhost:5000/api/"
// const token = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken
let token = ""
if (JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser !== null) {
    token = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken
}
else {
    token = ""
}


export const publicRequest = axios.create({
    baseURL: BASE_URL,
})
export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${token}` }
})
