import axios from "axios";
import { getToken } from "./general";

export const getAllCategories = () =>
    axios.get("/api/categories/get/all", {
        headers: {
            authorization: getToken()
        }
    })

export const getCategoryById = (id) =>
    axios.get("/api/categories/get/"+id, {
        headers: {
            authorization: getToken()
        }
    })