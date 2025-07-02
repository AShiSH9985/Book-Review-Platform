import React from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

const Modal = ({onClose}) => {

  return ( 
    <div className='fixed h-96 w-3/4 inset-0 backdrop-blur-sm w-90 bg-blue-600 flex flex-col justify-center rounded-xl'>
                <button onClick={onClose} className='place-self-end'><X /> </button>
           <div className='flex flex-row  justify-between'>
                <input type="text" className='h-12 ml-4 w-96 p-2 border-2'  placeholder='Search' />
           </div>
        <div className=' w-full h-16 mb-4 flex flex-col justify-center items-center border-b-2'>
            <h1 className=' text-gray-400'>Search for products, services, brands and categories</h1>
        </div>
        <div className='h-32 w-full flex flex-row items-center justify-center'>
            <div className=' w-1/2 pl-4 pb-2 flex flex-col justify-between'>
                <h1 className=' '><Link to=''>Ramayana</Link></h1>
                <h1 className=' '><Link to=''>Mahabharat</Link></h1>
            </div>

            <div className=' w-1/2 pl-4 pb-2 flex flex-col justify-between'>
                <h1 className=' '><Link to=''>Math</Link></h1>
                <h1 className=' '><Link to=''>English</Link></h1>
            </div> 
        </div>
    </div>
  )
}

export default Modal   