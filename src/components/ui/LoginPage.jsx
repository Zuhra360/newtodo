import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
export const LoginPage = () => {
    const navigate = useNavigate();
    
    const[email,setEmail]= useState([]);
    const[password,setPassword]= useState([]);
  return (
    <div className='w-full h-screen bg-gray-100 flex justify-center items-center '>
       <div className='w-96 h-96 bg-white flex flex-col  items-center'>
        <h1 className='text-4xl font-bold p-8'>Login Here</h1>
        <div className='items-center px-8 py-2'>
            <label className='text-xl font-semibold'>Usename</label>
            <input
            id="email"
            name="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="border-2 border-black w-80 p-1 text-base rounded bg-gray-200"
        />
        </div>

        <div className='items-center px-8 py-2'>
        <label className='text-xl font-semibold'>Password</label>
            <input
            id="password"
            name="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="border-2 border-black w-80 p-1 text-base rounded bg-gray-200"
        />
        </div>
        <button onClick={navigate} className="font-medium text-lg items-center bg-black text-white px-8 mt-8 py-1 rounded-lg" type="submit"><a href="/home">Login</a></button>
        

       </div>
    </div>
  )
}
