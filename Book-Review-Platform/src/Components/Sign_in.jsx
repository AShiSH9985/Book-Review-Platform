import React from 'react'

function Sign_in() {
  return (
     <div className='h-screen w-full bg-white flex justify-center items-center'>
            <div className='h-96 w-2/4  p-8 bg-gray-400 rounded-md'>
                <form  method="post" action="/create">
                <input 
                    className="px-3 py-2 w-11/12 mb-4 ml-2 rounded-md bg-white text-black outline-none" 
                    type="text" 
                    placeholder="username" 
                    name="username"
                />
                <input 
                    className="px-3 py-2 w-11/12 mt-2 mb-2 ml-2 rounded-md bg-white text-black outline-none" 
                    type="email" 
                    placeholder="email" 
                    name="email"
                />
                <input 
                    className="px-3 py-2 w-11/12 mt-4 mb-6 ml-2 rounded-md bg-white text-black outline-none" 
                    type="password" 
                    placeholder="password" 
                    name="password"
                />
                <div className='flex justify-center items-center'>
                    <input 
                        className="px-5 py-2  rounded-md bg-blue-500  " 
                        type="submit" 
                        value="Create user"
                    />
                </div>
            </form>
            </div>
        </div>
  )
}

export default Sign_in