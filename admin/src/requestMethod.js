import axios from "axios";

const BASE_URL = "http://localhost:5000/api/"
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYWZhNDUzNGJjNzc3NzY4NjJhZTFmNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MTkwNTk3NiwiZXhwIjoxNjQyMTY1MTc2fQ.ZxuhIxawW1RBq7Mpu6NS-2VuFsEI5oRnVjhkTOSLe-I"
// const toke = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})
export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${token}` }
})
