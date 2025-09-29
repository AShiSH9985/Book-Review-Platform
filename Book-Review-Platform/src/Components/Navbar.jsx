import React from 'react'
import Modal from './Modal';
import { NavLink, useNavigate } from 'react-router-dom'

function Navbar() {
    const [showModal, setShowModal] = React.useState(false);
    const navigate=useNavigate();
  return (
    <>
     <nav className='h-16 w-full bg-[#8ab] flex items-center justify-between px-4'>
            <div className="w-3/5 flex items-center justify-between">
                <NavLink to='/' className='text-black text-xl m-2 m-l-8'>Book_review.com</NavLink>
                <input type="text" onClick={()=>setShowModal(true)} className='text-black h-10 w-80 p-4 rounded-md' placeholder='Search...' />
            </div>
            <div className="w-1/4 flex items-center justify-end">
                <button onClick={()=> navigate('/Sign_in')} className="text-white bg-green-900 h-10 w-20 rounded-md font-semibold ">Sign up</button>
                <button className='text-white bg-green-900 m-2 h-10 w-20 rounded-md font-semibold'>Log in</button>
            </div>
        </nav>
        {showModal && <Modal onClose={()=>setShowModal(false)} />}

        </>
  )
}

export default Navbar