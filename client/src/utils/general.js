const tokenKey = "________________token__________key_____________"


export const storeToken = (token) => localStorage.setItem(tokenKey, token)
export const getToken = () => localStorage.getItem(tokenKey)
export const removeToken = () => localStorage.removeItem(tokenKey)