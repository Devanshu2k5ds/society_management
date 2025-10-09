import React from 'react';
import { useAppContext } from '../../context/AppContext';
import Mainbanner from '../../components/Mainbanner';
import Numericals from '../../components/numericals';
const First = () =>{
    const {count,setCount } = useAppContext();
    return (
        <div>
        <Mainbanner/>
        <Numericals/>
        </div>
)
};
export default First;   