import { createContext, useState } from "react";
export const Context = createContext();
export default function AppContext({children}) {
    const [idViewDetails, setIdViewDetails] = useState(-1);
    return (
        <Context.Provider value={{idViewDetails, setIdViewDetails}}>
            {children}
        </Context.Provider>
    )
}