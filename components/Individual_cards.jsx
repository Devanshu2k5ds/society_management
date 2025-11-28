import React from "react";
import { useState} from "react"
import {useNavigate} from "react-router-dom"
const Individual_cards = (props) => {
    const navigate = useNavigate();
    const [like,setLike] = useState(0)
    return (

        <div onClick={()=>navigate(props.link)} className="w-full h-full border-0 rounded-xl text-left p-2 bg-black text-white">
            <img src={props.image} alt={props.image_alt} className="mt-3 h-60 border-0 rounded-xl w-9/10 ml-2"/>
            <h1 className="mt-7 ml-2 text-xl font-medium    ">{props.title}</h1>
            <p className="ml-2 text-sm mt-1">{props.para}</p>
            <div className="text-end">
            <button className="mr-2 mb-3 mt-10 border-white rounded-2xl w-15 h-8 bg-white text-black font-medium"  onClick={()=>setLike(like+1)}>{props.button} {like}</button>
            </div>
        </div>
    )
}
export default Individual_cards
