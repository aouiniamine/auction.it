
const {io} = require("socket.io-client") 
const { getToken } = require("./general")

const socketConfig = {
    extraHeaders: {
        authorization: getToken(),
    }
}
export const socket = io(process.env.NEXT_PUBLIC_BACKEND_URL, socketConfig)