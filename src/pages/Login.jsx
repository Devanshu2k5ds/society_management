import React from 'react'
import { useAppContext } from '../../context/AppContext'
import { NavLink } from 'react-router-dom';
const Login = () => {
    const {ShowPassword, setShowPassword} = useAppContext();
  return (
    <div>
        <div className='flex'>
            <div>
                <img src="https://img.icons8.com/3d-fluency/94/user-male-circle.png" alt="profile image" />
                <h1>Welcome Back</h1>
                <p>Sign in to your SocietyHub account</p>
                <div>
                    <form>
                        <label htmlFor="email" className='block'>Email Address</label>
                        <input type="text" placeholder='&#128231; Enter your email' required id="email" name="email" autoFocus autoComplete='off'/>
                        <label htmlFor="password" className='block'>Password</label>
                        <div className='relative'>
                        <input type={ShowPassword ? "text" : "password"} placeholder='Enter your password' required id="password" name="password"/>
                    <button className='absolute '>👁️</button>
                        </div>
                        <div className='flex justify-between'>
                            <div>
                        <input type="radio" class="remember" id="remember"/>
                        <label htmlFor="remember">Remember me</label>
                            </div>
                        <NavLink to="/Forgot-password" className="text-blue-600 font-medium hover:underline" >Forgot Password?</NavLink>
                        </div>
                    </form>
                </div>
            </div>
                <div></div>
        </div>
    </div>
  )
}

export default Login
