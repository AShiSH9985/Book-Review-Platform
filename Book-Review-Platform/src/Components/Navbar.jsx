import React from 'react'
import Modal from './Modal';
import { NavLink } from 'react-router-dom'

function Navbar() {
    const [showModal, setShowModal] = React.useState(false);
  return (
    <>
     <nav className='h-16 w-full bg-[#80ba27] flex items-center justify-between px-4'>
            <div className="w-2/3 flex items-center justify-between">
                <NavLink to='/' className='text-black text-xl m-2 m-l-8'>Book_review.com</NavLink>
                <input type="text" onClick={()=>setShowModal(true)} className='text-black h-10 w-80 p-4 rounded-md' placeholder='Search...' />
            </div>
            <div className="w-1/2 flex items-center justify-end">
                <button className="text-white b h-10 w-16 rounded-md font-semibold ">Sign in</button>
                <button className='text-white bg-green-900 m-2 h-10 w-32 rounded-md font-semibold'>Write a review</button>
            </div>
        </nav>
        {showModal && <Modal onClose={()=>setShowModal(false)} />}

        </>
  )
}

export default Navbar