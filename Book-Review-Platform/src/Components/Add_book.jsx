import React from 'react'

function Add_book() {
  return (
    <>
        <div className='h-screen w-full bg-gray-800 p-10 flex flex-col items-center'>
            {/* <input type="text" placeholder='Enter Book Category' className='h-10 w-4/5 pl-4 border-2 m-2 rounded-md'/>
            <input type="text" placeholder='Enter Book Name' className='h-10 w-4/5 border-2 pl-4 mt-8 rounded-md'/> */}

            <select name="" id="" className='h-10 w-4/5 pl-4 border-2 border-blue-500 m-2 rounded-md'>
              <option value="">Fiction</option>
              <option value="">Non-Fiction</option>
              <option value="">Poetry</option>
              <option value="">Drama</option>
            </select>
            <input type="text" placeholder='Enter Book Name' className='h-10 w-4/5 border-2 border-blue-500 pl-4 mt-8 rounded-md' />

            
        </div>
    </>
  )
}

export default Add_book