import React, { useState } from "react";
import axios from 'axios';

const Society_form = () => {
    const [eventFields, setEventFields] = useState([{ 
        id: 1, 
        name: '', 
        description: '' 
    }]);
    const [form, setForm] = useState({
        name: '',
        desc: '',
        image: '',
        proff: '',
        exbo: '',
    })
        function handleChange(e) {
            const { name, value } = e.target;
            setForm(prevForm => ({
                ...prevForm,
                [name]: value
            }));
        }
    const [isNext,setisNext] = useState(false);
    const addEventField = (e) => {
        e.preventDefault();
        setEventFields([...eventFields, { 
            id: Date.now(), 
            name: '', 
            description: '' 
        }]);
    };
    const [isBack,setisBack] = useState(true);
    const handleEventChange = (id, field, value) => {
        const updatedEvents = eventFields.map(event => 
            event.id === id ? { ...event, [field]: value } : event
        );
        setEventFields(updatedEvents);
    };
    const handleSubmit = async(e)=>{
        e.preventDefault();
        try{
            const endpoint = "http://localhost:5000/society"
            const payload = {name : form.name , desc : form.desc , image : form.image , proff : form.proff , exbo : form.exbo , events : eventFields};
            const {data} = await axios.post(endpoint,payload);
            console.log(data);
        }catch(error){
            console.log(error.response.data);
        }
    }
    const removeEvent = (id) => {
        if (eventFields.length > 1) {  // Prevent removing the last event
            setEventFields(eventFields.filter(event => event.id !== id));
        }
    };
    return (
        <div className="w-2xl m-auto border-7 border-blue-500 rounded-xl p-4 text-start">
            <form onSubmit={handleSubmit} >
              {!isNext && <>
                <label className="block font-medium" htmlFor="name">Name of the society</label>
                <input type="text" name="name" id="name" onChange={handleChange} value={form.name} required className="border py-1 pl-2 rounded w-full"/>
                <label htmlFor="desc" className="block">Description of the society</label>
                <textarea name="desc" id="desc" onChange={handleChange} value={form.desc} required className="border py-1 pl-2 rounded w-full h-full"></textarea>
                <label htmlFor="image" className="block">Poster of the society</label>
                <input type="file" name="image" id="image" onChange={handleChange} value={form.image}  required className="w-full border rounded pl-2 py-1"/>
                <label htmlFor="proff" className="block">Proffessors linked with  the society</label>
                <input type="text" name="proff" id="proff" onChange={handleChange} value={form.proff} required className="w-full border rounded pl-2 py-1"></input>
                <label htmlFor="exbo" className="block">Executive Members of the Society</label>
                <input type="text" name="exbo" id="exbo" onChange={handleChange} value={form.exbo} required className="w-full border rounded pl-2 py-1" ></input></>}
                {!isNext ? (
                    <div className="flex justify-end">
                        <button 
                            type="button" 
                            onClick={() => setisNext(true)} 
                            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                        >
                            Next
                        </button>
                    </div>
                ) : (
                    <div className="space-y-2">
                    <div className="text-center">
                    <label className="block font-bold text-2xl">Events Organized by the Society</label>
                    </div>
                    {eventFields.map((event) => (
                        <div key={event.id} className="space-y-2 p-4 border rounded-lg relative">
                            {eventFields.length > 1 && (
                                <button
                                    type="button"
                                    onClick={() => removeEvent(event.id)}
                                    className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
                                    title="Remove event"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            )}
                            <div className="flex flex-col">
                                <label className="text-sm font-medium text-gray-700 mb-1">Event Name</label>
                                <input
                                    type="text"
                                    value={event.name}
                                    onChange={(e) => handleEventChange(event.id, 'name', e.target.value)}
                                    className="border p-2 rounded w-full"
                                    placeholder="Enter event name"
                                    required
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-sm font-medium text-gray-700 mb-1">Description</label>
                                <textarea
                                    value={event.description}
                                    onChange={(e) => handleEventChange(event.id, 'description', e.target.value)}
                                    className="border p-2 rounded w-full min-h-[100px]"
                                    placeholder="Enter event description" required
                                />  
                            </div>
                        </div>
                    ))}
                        <div className="text-end text-blue-500">
                            <button 
                                type="button" 
                                onClick={addEventField}
                                className="cursor-pointer hover:underline hover:font-medium"
                            >
                                Add More Event +
                            </button>
                        </div>
                        <div className="flex justify-between mt-4">
                            <button 
                                type="button"
                                onClick={() => setisNext(false)}
                                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
                            >
                                Back
                            </button>
                            <button 
                                type="submit" 
                                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                )}
            </form>
        </div>
    )
}
export default Society_form
