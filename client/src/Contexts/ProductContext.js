"use client"

import { socket } from "../utils/socket";

const { createContext, useState, useEffect } = require("react");

export const ProductContext = createContext()

export const ProductProvider = ({children, currentBids, currentComments, id }) => {
    const [comments, setComments] = useState(currentComments)
    const [bids, setBids] = useState(currentBids)
    const [imageInPreview, setImageInPreview] = useState(0)
    const sendComment = (comment) =>{
        socket.emit("send:comment", {comment, id})
    }
    const addBid = (price) => {
        socket.emit("add:bid", {price, id})
    }
    useEffect(()=>{
        console.log(currentBids)
        socket.on("connect", ()=>console.log("user connected"))
        socket.on("recieve:comment-"+id, data =>{
            setComments(prevState => {
                const nextState = [...prevState]
                nextState.push(data)
                return nextState
            })
        })
        socket.on("added:bid-"+id, data =>{
            setBids(prevState => {
                const nextState = [...prevState]
                nextState.push(data)
                return nextState
            })
        })
        return ()=>{
            socket.off('connect')
            socket.off("recieve:comment-"+id)
            socket.off("added:bid-"+id)
        }
    }, [])

    return (
        <ProductContext.Provider value={{bids, comments, addBid, sendComment, imageInPreview, setImageInPreview}}>
            {children}
        </ProductContext.Provider>
    )
} 