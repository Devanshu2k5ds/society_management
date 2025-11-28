import React from "react";
import Individual_cards from "./Individual_cards";
import Techimage from "../src/assets/tech.png"
const Tech = () => {
    return (
        <div className="bg-gray-800/10 p-6">
            <div className="bg-white p-6 border-0 rounded-xl text-start">
            <h1 className="text-3xl font-medium ml-3">Explore Our Tech Societies</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4   gap-6 p-3 max-w-8xl mx-auto w-full mt-10">
            <Individual_cards image={Techimage} link={'/page'} image_alt="tech" title="Tech" para="Join us for weeekly coding sessions" button="❤︎"/>
            <Individual_cards image={Techimage} onClick={2} image_alt="tech" title="Tech" para="Join us for weeekly coding sessions" button="❤︎"/>
            <Individual_cards image={Techimage} onClick={2} image_alt="tech" title="Tech" para="Join us for weeekly coding sessions" button="❤︎"/>
            <Individual_cards image={Techimage} onClick={2} image_alt="tech" title="Tech" para="Join us for weeekly coding sessions" button="❤︎"/>
            <Individual_cards image={Techimage} onClick={2} image_alt="tech" title="Tech" para="Join us for weeekly coding sessions" button="❤︎"/>
            <Individual_cards image={Techimage} onClick={2} image_alt="tech" title="Tech" para="Join us for weeekly coding sessions" button="❤︎"/>
            <Individual_cards image={Techimage} onClick={2} image_alt="tech" title="Tech" para="Join us for weeekly coding sessions" button="❤︎"/>
            <Individual_cards image={Techimage} onClick={2} image_alt="tech" title="Tech" para="Join us for weeekly coding sessions" button="❤︎"/>
        </div>
            </div>
        </div>
    )
}
export default Tech
