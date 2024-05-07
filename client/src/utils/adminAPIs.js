import axios from "axios";

export const loginAdmin = (body) => 
    axios.post("/api/admin/login", body).then(res => res.data)