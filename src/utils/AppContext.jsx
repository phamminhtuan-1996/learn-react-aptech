import React, { createContext , useState } from 'react'


const AppContext = createContext();
export function AppContextProvider({children}) {
    const [valueInput, setValueInput] = useState('')
    return (
        <AppContext.Provider value={{valueInput, setValueInput}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext;
