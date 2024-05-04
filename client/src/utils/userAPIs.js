import axios from "axios";

export const register = ( body ) =>
    axios.post("/api/user/register", body).then(res => res.data)

export const login = (body) => 
    axios.post("/api/user/login", body).then(res => res.data)