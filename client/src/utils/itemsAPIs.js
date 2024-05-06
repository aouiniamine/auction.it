import axios from "axios";
import { getToken } from "./general";

export const addProductToAuction = (data) => 
    axios.post("/api/items/save", data, {
        headers: {
            authorization: getToken(),
            'Content-Type': 'multipart/form-data'

        },
    })