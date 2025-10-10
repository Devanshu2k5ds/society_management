import React from 'react';
import { useAppContext } from '../../context/AppContext';
import Mainbanner from '../../components/Mainbanner';
import Numericals from '../../components/numericals';
import Society_card from '../../components/Society_card';
import Tech_Image from '../../src/assets/tech.jpeg'

const First = () => {
    const { count, setCount } = useAppContext();
    return (
        <div>
            <Mainbanner />
            <Numericals />
            <div className='space-y-5 my-5 mx-auto w-[600px]'>
            <h1 className='text-4xl font-medium ' >Our Partner Socities</h1>
            <p className='text-gray-600 mb-7 '>Discover the diverse range of socities that make our college community vibrant and engaging</p>
            </div>
            <div className="mx-auto max-w-7xl py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
                <Society_card src={Tech_Image} alt="Tech_Image" title="Tech Societies" Content="Leading technology innovation and coding competitions across campus." joiny={450} />
                <Society_card src={Tech_Image} alt="Tech_Image" title="Tech Societies" Content="Leading technology innovation and coding competitions across campus." joiny={450} />
                <Society_card src={Tech_Image} alt="Tech_Image" title="Tech Societies" Content="Leading technology innovation and coding competitions across campus." joiny={450} />
                <Society_card src={Tech_Image} alt="Tech_Image" title="Tech Societies" Content="Leading technology innovation and coding competitions across campus." joiny={450} />
                <Society_card src={Tech_Image} alt="Tech_Image" title="Tech Societies" Content="Leading technology innovation and coding competitions across campus." joiny={450} />
                <Society_card src={Tech_Image} alt="Tech_Image" title="Tech Societies" Content="Leading technology innovation and coding competitions across campus." joiny={450} />
            </div>
        </div>
    )
};
export default First;