import { useState , useContext , useEffect , createContext } from "react";
export const AppContext = createContext();
export const AppContextProvider = ({children}) =>{
    const [count , setCount] = useState(0);
    const value = {count,setCount};
    return <AppContext.Provider value = {value}>
        {children}
    </AppContext.Provider>
}
export const useAppContext = ()=>{
    return useContext(AppContext)
}
