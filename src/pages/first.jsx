import React from 'react';
import { useAppContext } from '../../context/AppContext';
import Mainbanner from '../../components/Mainbanner';
import Numericals from '../../components/numericals';
import Society_card from '../../components/Society_card';
import Tech_Image from '../../src/assets/tech.jpeg'
import Arts_image from '../../src/assets/arts.jpeg'
import Business_image from '../../src/assets/business.jpeg'
import Environment_image from '../../src/assets/environment.jpeg'
import Fitness_image from '../../src/assets/fitness.jpeg'
import Literature_image from '../../src/assets/literature.jpeg'
import Middle from '../../components/Middle';
const First = () => {
    const { count, setCount } = useAppContext();
    return (
        <div>
            <Mainbanner />
            <Numericals />
            <div className='bg-gray-600/8'>

            <div className='space-y-5 my-5 mx-auto w-[600px] pt-10'>
            <h1 className='text-4xl font-medium' >Our Partner Socities</h1>
            <p className='text-gray-600 mb-7 '>Discover the diverse range of socities that make our college community vibrant and engaging</p>
            </div>
            <div className="mx-auto max-w-7xl py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 auto-rows-fr ">
                <Society_card src={Tech_Image} alt="Tech_Image" title="Tech Societies" Content="Leading technology innovation and coding competitions across campus." joiny={450}  color="bg-red-600"/>
                <Society_card src={Arts_image} alt="Tech_Image" title="Tech Societies" Content="Leading technology innovation and coding competitions across campus." joiny={450} color="bg-green-600"/>
                <Society_card src={Business_image} alt="Tech_Image" title="Tech Societies" Content="Leading technology innovation and coding competitions across campus." joiny={450} color="bg-purple-600"/>
                <Society_card src={Environment_image} alt="Tech_Image" title="Tech Societies" Content="Leading technology innovation and coding competitions across campus." joiny={450} color="bg-blue-600"/>
                <Society_card src={Fitness_image} alt="Tech_Image" title="Tech Societies" Content="Leading technology innovation and coding competitions across campus." joiny={450} color="bg-yellow-600"/>
                <Society_card src={Literature_image} alt="Tech_Image" title="Tech Societies" Content="Leading technology innovation and coding competitions across campus." joiny={450} color="bg-orange-600"/>
            </div>
            </div>
            <Middle/>
        </div>
    )
};
export default First;