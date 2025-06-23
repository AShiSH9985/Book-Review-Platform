import React from 'react'
import { NavLink } from 'react-router-dom'
function Home() {
  return (
    <>
        <nav className='h-16 w-full bg-green-400 flex items-center justify-between px-4'>
            <div className="w-1/2 flex items-center justify-evenly">
                <NavLink to='/' className='text-black text-xl m-4 m-l-8'>Book_review.com</NavLink>
                <input type="text" className='text-white h-10 w-96 p-4 rounded-md' placeholder='Search...' />
            </div>
            <div className="w-1/2 flex items-center justify-end">
                <button className="text-white bg-green-600 m-2 h-10 w-32 rounded-md font-semibold ">Sign in</button>
                <button className='text-white bg-green-900 m-2 h-10 w-64 rounded-md font-semibold'>Write a review</button>
            </div>

        </nav>
    </>
  )
}

export default Home