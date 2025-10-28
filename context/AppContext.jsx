import { useState , useContext , useEffect , createContext } from "react";
export const AppContext = createContext();
export const AppContextProvider = ({children}) =>{
    const [Count , setCount] = useState(0);
    const [IsLogin , setLogin] = useState(false);
    const [ShowPassword , setShowPassword] = useState(false);
    const [ShowConfirmPassword , setShowConfirmPassword] = useState(false);
    const [isRegistering,setIsRegistering] = useState(false);
    const value = {Count,setCount,IsLogin , setLogin , ShowPassword,setShowPassword,ShowConfirmPassword,setShowConfirmPassword,isRegistering,setIsRegistering};
    return <AppContext.Provider value = {value}>
        {children}
    </AppContext.Provider>
}
export const useAppContext = ()=>{
    return useContext(AppContext)
}
