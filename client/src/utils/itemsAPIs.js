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

export const getInAuction = async () =>{
    try {
        
        const res = await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL+"/api/items/now/auction")
        const {items} = res.data
        return items
    }catch(err){
        console.log(err)
        return []
    }
}

export const refuseItem = (id) =>{
    const adminToken = getTokenAdmin()
    return axios.put("/api/items/"+id+"/refuse", {}, {
        headers: {
            admin_authorization: adminToken
        }
    }).then(res => res.data)
}

export const approveItem = (id) => {
    const adminToken = getTokenAdmin()
    return axios.put("/api/items/"+id+"/approve", {}, {
        headers: {
            admin_authorization: getTokenAdmin()
        }
    }).then(res => res.data)
}

export const deleteItem = (id) =>
    axios.delete("/api/items/"+id, {
        headers: {
            admin_authorization: getTokenAdmin()
        }
    }).then(res => res.data)

export const getItemByIdAsAdmin = (id) => 
    axios.get("/api/items/"+id, {
        headers: {
            admin_authorization: getTokenAdmin()
        }
    }).then(res => res.data)

export const getItemById = (id) => 
    axios.get("/api/items/"+id, {
        authorization: getToken(),
    }).then(res => res.data)