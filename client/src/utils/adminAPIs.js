import axios from "axios";
import { storeTokenAdmin } from "./general";

export const loginAdmin = (body) => 
    axios.post("/api/admin/login", body).then(res => storeTokenAdmin(res.data.adminToken))