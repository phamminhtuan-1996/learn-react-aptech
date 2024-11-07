import { createContext, useState } from "react"
export const Context = createContext();
export default function AppContext ({children}) {
    const [isShowNoftication, setShowNotication] = useState(false);
    const [messageNoti, setMessageNoti] = useState('');
    return (
        <Context.Provider value={{isShowNoftication, setShowNotication, messageNoti, setMessageNoti}}>
            {children}
        </Context.Provider>
    )
}