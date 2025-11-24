import { useState , useContext , useEffect , createContext } from "react";
export const AppContext = createContext();
export const AppContextProvider = ({children}) =>{
    const [Count , setCount] = useState(0);
    const [IsLogin , setIsLogin] = useState(() => {
        // Initialize from localStorage or default to false
        const saved = localStorage.getItem('isLoggedIn');
        return saved === 'true' || false;
    });
    
    // Update localStorage when IsLogin changes
    useEffect(() => {
        localStorage.setItem('isLoggedIn', IsLogin);
    }, [IsLogin]);
    const [ShowPassword , setShowPassword] = useState(false);
    const [ShowConfirmPassword , setShowConfirmPassword] = useState(false);
    const [isRegistering,setIsRegistering] = useState(false);
    const value = {Count,setCount,IsLogin , setIsLogin , ShowPassword,setShowPassword,ShowConfirmPassword,setShowConfirmPassword,isRegistering,setIsRegistering};
    return <AppContext.Provider value = {value}>
        {children}
    </AppContext.Provider>
}
export const useAppContext = ()=>{
    return useContext(AppContext)
}
