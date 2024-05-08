import axios from "axios";
import { getToken, getTokenAdmin, removeTokenAdmin } from "./general";

export const addProductToAuction = (data) => 
    axios.post("/api/items/save", data, {
        headers: {
            authorization: getToken(),
            'Content-Type': 'multipart/form-data'

        },
    })

export const getPendingItems = () => 
    axios.get('/api/items/get/pending', {
        headers: {
            admin_authorization: getTokenAdmin()
        }
    }).then(res => res.data)


