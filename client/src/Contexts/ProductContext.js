"use client"

import { socket } from "../utils/socket";

const { createContext, useState, useEffect } = require("react");

export const ProductContext = createContext()

export const ProductProvider = ({children, currentBids, currentComments, id }) => {
    const [comments, setComments] = useState(currentBids)
    const [bids, setBids] = useState([])
    const [imageInPreview, setImageInPreview] = useState(0)
    const sendComment = (comment) =>{
        socket.emit("send:comment", {comment, id})
    }
    const addBid = (bid) => {
        setBids(prevState => {
            const nextState = [...prevState]
            nextState.push(bid)
            return nextState
        })
    }
    useEffect(()=>{
        setComments(currentComments)
        socket.on("connect", ()=>console.log("user connected"))
        socket.on("recieve:comment-"+id, data =>{
            setComments(prevState => {
                const nextState = [...prevState]
                nextState.push(data)
                return nextState
            })
        })
        return ()=>{
            socket.off('connect')
            socket.off("recieve:comment-"+id)
        }
    }, [])

    return (
        <ProductContext.Provider value={{bids, comments, addBid, sendComment, imageInPreview, setImageInPreview}}>
            {children}
        </ProductContext.Provider>
    )
} 