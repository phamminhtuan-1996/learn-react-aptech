import React, { createContext , useState } from 'react'

export const Context = createContext();

export default function AppContextProvider({children}) {
    const [valueInput, setValueInput] = useState('')
    return (
        <Context.Provider value={{valueInput, setValueInput}}>
            {children}
        </Context.Provider>
    )
}

