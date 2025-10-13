import React from 'react'
import { useAppContext } from '../../context/AppContext'
import { NavLink } from 'react-router-dom';
const Login = () => {
    const { ShowPassword, setShowPassword } = useAppContext();
    function changePassword() {
        setShowPassword(!ShowPassword);
    }
    return (
        <div>
            <div className='flex h-screen'>
                <div className='w-1/2 flex flex-col text-center justify-center px-30'>
                    <img className=' size-13 mx-auto' src="https://img.icons8.com/3d-fluency/94/user-male-circle.png" alt="profile image" />
                    <h1 className='text-3xl font-medium mb-1 mt-5'>Welcome Back</h1>
                    <p className='text-gray-500'>Sign in to your SocietyHub account</p>
                    <div className='mt-5'>
                        <form>
                            <label htmlFor="email" className='block text-start '>Email Address</label>
                            <input type="text" className='w-full border-gray-500 rounded-lg py-2 border px-2 focus:outline-none mb-5 mt-1' placeholder='&#128231;    Enter your email' required id="email" name="email" autoFocus autoComplete='off' />
                            <label htmlFor="password" className='block text-start'>Password</label>
                            <div className='relative'>
                                <input className='w-full py-2 border border-gray-500 focus:outline-none rounded-lg px-2 mt-1 mb-2' type={ShowPassword ? "text" : "password"} placeholder='&#128274;    Enter your password' required id="password" name="password" />
                                <button onClick={changePassword} className='absolute right-5 top-4'>&#128065;</button>
                            </div>
                            <div className='flex justify-between mb-4'>
                                <div className='flex items-center'>
                                    <input type="checkbox" class="remember" id="remember" className='size-4 mr-2' />
                                    <label className='text-gray-600' htmlFor="remember">Remember me</label>
                                </div>
                                <NavLink to="/Forgot-password" className="text-blue-600 font-medium hover:underline" >Forgot Password?</NavLink>
                            </div>
                            <button type='submit' className={`cursor-pointer bg-blue-600 w-full py-2 border rounded-lg text-white font-medium mb-2`}>Sign In</button>
                            <div className='flex items-center '>
                                <div className='w-full border h-0 px-8 border-gray-500'></div>
                                <p className='w-full text-gray-600'>Or continue with</p>
                                <div className='w-full border h-0 px-8 border-gray-500'></div>
                            </div>
                            <button className='cursor-pointer w-full py-5 border-gray-500 border rounded-lg mt-5'>Google</button>
                        </form>
                    </div>
                </div>
                <div className='bg-gradient-to-br from-blue-700 to-purple-600 flex flex-col justify-center items-center w-1/2'><img className='invert' src="https://img.icons8.com/parakeet-line/48/group.png" alt="community logo" />
                    <h1 className='text-white font-bold text-3xl mt-10'>Join Our Community</h1>
                    <p className='text-white mt-5 w-2/4 text-center font-medium   text-lg'>Connect with fellow students, join exciting socitites, and participate in amazing events that shape your college experience</p>
                    <div className='flex w-3/4 justify-around mt-8 '>
                        <div>
                            <h1 className='text-3xl text-yellow-500 font-bold'>25+</h1>
                            <p className='text-white'>Active Socities</p>
                        </div>
                        <div>
                            <h1 className='text-3xl text-green-400 font-bold'>2.5K+</h1>
                            <p className='text-white'>Students</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
