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

        <div className='h-72 w-full bg-green-300 flex flex-col items-center justify-center'>
            <h1 className="text-4xl font-semibold m-4">Know Better, Choose Better</h1>
            <h1>Reviews By people like you</h1>
            <input type="text" className='text-black h-12  w-3/5 p-4 m-4 rounded-xs' placeholder='What are you looking for.. ?' />
        </div>
        <div className=' border-b-2 w-full h-64 flex flex-col items-center justify-center '>
            <h1 className='m-2'>Add a book to the list.</h1>
            <button className='text-white font-semibold h-10 m-4 w-96 rounded-md bg-green-900'>Add Book</button>

        </div>
    </>
  )
}

export default Home