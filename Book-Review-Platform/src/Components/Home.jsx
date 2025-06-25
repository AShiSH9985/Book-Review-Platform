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

        <div className='h-72 w-full bg-[url(./images/book.jpeg)] flex flex-col items-center justify-center'>
            <div className='w-full h-72 bg-green-900 opacity-75 flex flex-col items-center justify-center'>
                <h1 className="text-4xl text-white font-semibold m-4">Know Better, Choose Better</h1>
                <h1 className='text-white'>Reviews By people like you</h1>
                <input type="text" className='text-black h-12  w-3/5 p-4 m-4 rounded-xs' placeholder='What are you looking for.. ?' />
            </div>
        </div>
        <div className=' border-b-2 w-full h-64 flex flex-col items-center justify-center '>
            <h1 className='m-2 text-2xl font-semibold'>Add a book to the list.</h1>
            <h1>Book_Review.com is a community of consumers helping each other make better book selecting decisions.</h1>
            <button className='text-white font-semibold h-10 m-4 w-96 rounded-md bg-green-900'>Add Book</button>
        </div>

        <div className='w-full flex flex-col items-center border-b-2'>
            <h1 className=' text-2xl font-semibold m-2'>Popular Categories</h1>
            <h1>Browse our most popular Categories</h1>
            <div className='w-full m-2 flex justify-between m-0 p-0'>
                <div className='w-1/4 h-40 bg-[url(./images/fiction.jpeg)] m-2 flex justify-center items-center rounded-md'>
                    <div className='bg-green-500 opacity-50 w-full h-full flex items-center justify-center'>
                        <h1>Fiction</h1>
                    </div>
                </div>
                <div className='w-1/4 h-40 bg-[url(./images/non-fiction.jpeg)] m-2 flex justify-center items-center rounded-md'>
                    <div className='bg-green-500 opacity-50 w-full h-full flex items-center justify-center'>
                        <h1>Non-Fiction</h1>
                    </div>
                </div>
                <div className='w-1/4 h-40 bg-[url(./images/Poetry1.jpeg)] m-2 flex justify-center items-center rounded-md'>
                    <div className='bg-green-500 opacity-50 w-full h-full flex items-center justify-center'>
                        <h1>Poetry</h1>
                    </div>
                </div>
                <div className='w-1/4 h-40 bg-[url(./images/drama.jpeg)] m-2 flex justify-center items-center rounded-md'>
                    <div className='bg-green-500 opacity-50 w-full h-full flex items-center justify-center'>
                        <h1>Drama</h1>
                    </div>
                </div>
            </div>
        </div>

        <footer className='h-16 w-full'></footer>
    </>
  )
}

export default Home