import React from 'react'

function Sign_in() {
  return (
     <div className='h-screen w-full bg-white flex justify-center items-center'>
            <div className='h-96 w-2/4 bg-gray-400 rounded-md'>
                <input type="text" placeholder='Username' className='m-4 p-2 w-11/12 rounded-md'/>
                <input type="email" placeholder="Email" className='m-4 p-2 w-11/12 rounded-md' />
                <input type="password" placeholder='Password' className='m-4 p-2 w-11/12 rounded-md'/>
                <div className='flex justify-center'>
                    <button className='text-white p-2 bg-green-600 w-24 m-4 rounded-md'>Login</button>
                </div>
            </div>
        </div>
  )
}

export default Sign_in