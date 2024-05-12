"use client"
const { createContext, useState } = require("react");

export const ProductContext = createContext()

export const ProductProvider = ({children, currentBids, currentComments }) => {
    const [comments, setComments] = useState(currentBids)
    const [bids, setBids] = useState(currentComments)
    const [imageInPreview, setImageInPreview] = useState(0)
    const addComment = (comment) =>{
        setComments(prevState => {
            const nextState = [...prevState]
            nextState.push(comment)
            return nextState
        })
    }
    const addBid = (bid) => {
        setBids(prevState => {
            const nextState = [...prevState]
            nextState.push(bid)
            return nextState
        })
    }
    return (
        <ProductContext.Provider value={{bids, comments, addBid, addComment, imageInPreview, setImageInPreview}}>
            {children}
        </ProductContext.Provider>
    )
} 