const tokenKey = "________________token__________key_____________"
const tokenKeyAdmin = "________________token__________key_____________admin____________________"

export const storeToken = (token) => localStorage.setItem(tokenKey, token)
export const getToken = () => localStorage.getItem(tokenKey)
export const removeToken = () => localStorage.removeItem(tokenKey)

export const storeTokenAdmin = (token) => localStorage.setItem(tokenKeyAdmin, token)
export const getTokenAdmin = () => localStorage.getItem(tokenKeyAdmin)
export const removeTokenAdmin = () => localStorage.removeItem(tokenKeyAdmin)