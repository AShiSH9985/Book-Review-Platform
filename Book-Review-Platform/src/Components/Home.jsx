import React from 'react'
import Navbar from './Navbar';
import { Link } from 'react-router-dom'
import Modal from './Modal'
import Fiction from './Fiction';
import Non_Fiction from './Non_Fiction';
import Footer from './Footer';
import Poetry from './Poetry';
import Drama from './Drama';
import { useNavigate } from 'react-router-dom';
import Write_a_Review from './Write_a_Review';
import Add_book from './Add_book';
import Sign_in from './Sign_in';
function Home() {
    const [showModal, setShowModal] = React.useState(false);
    const navigate = useNavigate();
    const goToFiction = () => {
        navigate('/fiction');
    };
    const goToNonFiction=()=>{
        navigate('/non-fiction');
    };
    const goToPoetry=()=>{
        navigate('/Poetry');
    };
    const goToDrama=()=>{
        navigate('/drama');
    };
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
               
                <button onClick={goToFiction} className='w-1/4 h-40 bg-[url(./images/fiction.jpeg)] bg-cover bg-no-repeat m-2 flex justify-center items-center'>
                    <div  className='w-full h-40 flex justify-center items-center'>
                        <div className='bg-green-900 opacity-90 w-full h-full flex items-center justify-center'>
                            <h1>Fiction</h1>
                        </div>     
                    </div>

                </button>
                <button onClick={goToNonFiction} className='w-1/4 h-40 bg-[url(./images/non-fiction.jpeg)] bg-cover bg-no-repeat m-2 flex justify-center items-center'>
                    <div className='w-full h-40 flex justify-center items-center'>
                        <div className='bg-green-900 opacity-90 w-full h-full flex items-center justify-center'>
                            <h1 >Non-Fiction</h1>
                        </div>
                    </div>
                </button>
                 <button onClick={goToPoetry} className='w-1/4 h-40 bg-[url(./images/non-fiction.jpeg)] bg-cover bg-no-repeat m-2 flex justify-center items-center'>
                    <div className='w-full h-40 flex justify-center items-center'>
                        <div className='bg-green-900 opacity-90 w-full h-full flex items-center justify-center'>
                            <h1>Poetry</h1>
                        </div>
                    </div>
                </button>

                <button onClick={goToDrama} className='w-1/4 h-40 bg-[url(./images/drama.jpeg)] bg-cover bg-no-repeatbg-cover bg-no-repeat m-2 flex justify-center items-center'>
                <div className='w-full h-40  flex justify-center items-center'>
                    <div className='bg-green-900 opacity-90 w-full h-full flex items-center justify-center'>
                        <h1>Drama</h1>
                    </div>
                </div>
                </button>
            </div>
        </div>

        <div className='h-32 w-full bg-zinc-100 flex flex-col items-center justify-center border-b-2'>
            <h1 className='m-2 text-2xl font-semibold'>Featured Review</h1>
            <h1>Browse some of oue latest reviews</h1>
        </div>

        <Footer/>
        <Sign_in />

        {showModal && <Modal onClose={()=>setShowModal(false)} />}
           
            {/* <Add_book /> */}
    </>
  )
}

export default Home