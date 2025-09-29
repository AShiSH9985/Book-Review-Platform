import React from 'react'

import SapiensImg from '../images/Non-Fiction/sapiens.jpeg';
function Card({name,image}) {
  return (
    <div className="h-96 w-auto p-2 bg-white border-2 rounded-md flex flex-col items-center ">
                      <img src={image} alt="" className='h-52 w-auto object-cover rounded-md' />
                        <h1 className='text-blue-600 font-semibold m-2'>{name} </h1>
                          <div>
                            <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Add Review</button>
                            <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Delete Review</button>
                            <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Show Review</button>
                          </div>
    </div>
  )
}

export default Card