import React from 'react'
import Navbar from './Navbar';
import { Link } from 'react-router-dom'
import Modal from './Modal'
import Fiction from './Fiction';
import Non_Fiction from './Non_Fiction';
import Footer from './Footer';
import Poetry from './Poetry';
function Home() {
    const [showModal, setShowModal] = React.useState(false);
  return (

    <>
       
        <Navbar/>
        <div className='h-80 w-full bg-[url(./images/book.jpeg)] flex flex-col items-center justify-center'>
            <div className='w-full h-80 bg-green-900 opacity-90 flex flex-col items-center justify-center'>
                <h1 className="text-4xl text-white font-semibold m-4">Know Better, Choose Better</h1>
                <h1 className='text-white'>Reviews By people like you</h1>
                <input type="text" onClick={()=>setShowModal(true)} className='text-black h-12  w-3/5 p-4 m-4 bg-white-900 rounded-md' placeholder='What are you looking for.. ?' />
            </div>
        </div>
        <div className=' border-b-2 h-64 m-2 flex flex-col text-center items-center justify-center '>
            <h1 className='m-2 text-2xl font-semibold'>Add a book to the list.</h1>
            <h1>Book_Review.com is a community of consumers helping each other make better book selecting decisions.</h1>
            <button className='text-white font-semibold h-10 m-4 w-96 rounded-md bg-green-900'>Add Book</button>
        </div>

        <div className='w-full flex flex-col items-center border-b-2'>
            <h1 className=' text-2xl font-semibold m-2'>Popular Categories</h1>
            <h1>Browse our most popular Categories</h1>
            <div className='w-full m-2 flex justify-between m-0 p-0'>
                <div  className='w-1/4 h-40 bg-[url(./images/fiction.jpeg)] m-2 flex justify-center items-center'>
                    <div className='bg-green-900 opacity-90 w-full h-full flex items-center justify-center'>
                        <h1>Fiction</h1>
                    </div>     
                </div>
                <div className='w-1/4 h-40 bg-[url(./images/non-fiction.jpeg)] m-2 flex justify-center items-center'>
                    <div className='bg-green-900 opacity-90 w-full h-full flex items-center justify-center'>
                        <h1 >Non-Fiction</h1>
                    </div>
                </div>
                <div className='w-1/4 h-40 bg-[url(./images/Poetry1.jpeg)] m-2 flex justify-center items-center'>
                    <div className='bg-green-900 opacity-90 w-full h-full flex items-center justify-center'>
                        <h1>Poetry</h1>
                    </div>
                </div>
                <div className='w-1/4 h-40 bg-[url(./images/drama.jpeg)] m-2 flex justify-center items-center'>
                    <div className='bg-green-900 opacity-90 w-full h-full flex items-center justify-center'>
                        <h1>Drama</h1>
                    </div>
                </div>
            </div>
        </div>

        <div className='h-32 w-full bg-zinc-100 flex flex-col items-center justify-center border-b-2'>
            <h1 className='m-2 text-2xl font-semibold'>Featured Review</h1>
            <h1>Browse some of oue latest reviews</h1>
        </div>

        <div className='w-full'>
            <div className='h-64 w-full bg-zinc-200 flex justify-between p-4'> 
                <div className='w-1/2 h-full ml-8'>
                    <h1 className='text-green-400 font-semibold'>GET MORE INFO</h1> 
                        <li><Link>Help Centre </Link></li>
                        <li><Link> About us</Link></li>
                        <li><Link>Write a Review </Link></li>
                        <li><Link>Posting Guidelines </Link></li>
                        <li><Link>Trust Centre </Link></li>
                        <li><Link>Terms of use </Link></li>
                        <li><Link>Privacy Policy </Link></li>
                        <li><Link>Contact us </Link></li>
                    </div>
                    
                <div className='w-1/2 h-full ml-8 mb-2'>
                    <h1 className='text-green-400 font-semibold'>FOR BUSINESS</h1>
                    <li><Link to="">Overview</Link></li>
                    <li><Link to="">Brand Management</Link></li>
                    <li><Link to="">Advertising</Link></li>
                    <li><Link to="">Ambassador Program</Link></li>
                </div>
            </div>

            
        </div>
        <Footer/>

        {showModal && <Modal onClose={()=>setShowModal(false)} />}
            {/* /* <Fiction /> */}
            <Non_Fiction/>
            {/* <Poetry /> */}
            {/* <Drama /> */}
    </>
  )
}

export default Home