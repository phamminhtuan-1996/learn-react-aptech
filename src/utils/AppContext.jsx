import { createContext, useState } from "react"
export const Context = createContext();
export default function AppContext ({children}) {
    const [isShowNoftication, setShowNotication] = useState(false);
    const [messageNoti, setMessageNoti] = useState('');
    const [updateCart, setUpdateCart] = useState(false);
    const [updateWhiteList, setUpdateWhiteList] = useState(false);
    return (
        <Context.Provider 
            value={{
                isShowNoftication, 
                setShowNotication, 
                messageNoti, 
                setMessageNoti, 
                updateCart, 
                setUpdateCart,
                updateWhiteList, 
                setUpdateWhiteList
            }}
        >
            {children}
        </Context.Provider>
    )
}