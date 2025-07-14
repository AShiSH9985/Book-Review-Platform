import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import Hayavadana from '../images/Drama/Hayavadana.jpeg'
import DollarBahu from '../images/Drama/Dollar Bahu.jpeg';
import AndhaYug from '../images/Drama/Andha Yug.jpeg';
import TheBlueMoonDay from '../images/Drama/The Blue Moon Day.jpeg';
import AdollsHouse from "../images/Drama/A Doll's House.jpeg";
import LeanDays from '../images/Drama/Lean Days.jpeg';
import WeddingPickle from '../images/Drama/Wedding Pickle.jpeg';
import Kamala from '../images/Drama/Kamala.jpeg';
import KaalKiQaidMein from '../images/Drama/Kaal Ki Qaid Mein.jpeg';

function Drama() {
  return (
    
    <>
        <Navbar/>
            <div className='w-full h-full bg-gray-900 grid grid-cols-3  gap-6 p-4 flex flex-col items-center pl-4 pr-4'>
                <div className="h-96 w-auto p-2 bg-white border-2 rounded-md flex flex-col items-center ">
                  <img src={Hayavadana} alt="" className='h-52 w-auto object-cover rounded-md' />
                    <h1 className='text-blue-600 font-semibold m-2'>Hayavadana </h1>
                      <div>
                        <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Add Review</button>
                        <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Delete Review</button>
                        <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Show Review</button>
                      </div>
                </div>
                <div className="h-96 w-auto p-2 bg-white border-2 rounded-md flex flex-col items-center ">
                  <img src={DollarBahu} alt="" className='h-52 w-auto rounded-md' />
                    <h1 className='text-blue-600 font-semibold m-2'>Dollar Bahu</h1>
                      <div>
                        <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Add Review</button>
                        <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Delete Review</button>
                        <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Show Review</button>
                      </div>
                </div>
                <div className="h-96 w-auto p-2 bg-white border-2 rounded-md flex flex-col items-center ">
                  <img src={AndhaYug} alt="" className='h-52 w-auto rounded-md' />
                    <h1 className='text-blue-600 font-semibold m-2'>Andha Yug</h1>
                      <div>
                        <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Add Review</button>
                        <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Delete Review</button>
                        <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Show Review</button>
                      </div>
                </div>
                <div className="h-96 w-auto p-2 bg-white border-2 rounded-md flex flex-col items-center ">
                  <img src={TheBlueMoonDay} alt="" className='h-52 w-auto  rounded-md' />
                    <h1 className='text-blue-600 font-semibold m-2'>The Blue Moon Day </h1>
                      <div>
                        <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Add Review</button>
                        <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 mt-0 mb-0 ml-1 mr-1'>Delete Review</button>
                        <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Show Review</button>
                      </div>
                </div>
                <div className="h-96 w-auto p-2 bg-white border-2 rounded-md flex flex-col items-center ">
                  <img src={LeanDays} alt="" className='h-52 w-auto  rounded-md' />
                    <h1 className='text-blue-600 font-semibold m-2'>Lean Days</h1>
                      <div>
                        <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Add Review</button>
                        <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Delete Review</button>
                        <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Show Review</button>
                      </div>
                </div>
                <div className="h-96 w-auto p-2 bg-white border-2 rounded-md flex flex-col items-center ">
                  <img src={WeddingPickle} alt="" className='h-52 w-auto  rounded-md' />
                    <h1 className='text-blue-600 font-semibold m-2'>Wedding Pickle</h1>
                      <div>
                        <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Add Review</button>
                        <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Delete Review</button>
                        <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Show Review</button>
                      </div>
                </div>
                <div className="h-96 w-auto p-2 bg-white border-2 rounded-md flex flex-col items-center ">
                  <img src={Kamala} alt="" className='h-52 w-auto  rounded-md' />
                    <h1 className='text-blue-600 font-semibold m-2'>Kamala</h1>
                      <div>
                        <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Add Review</button>
                        <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Delete Review</button>
                        <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Show Review</button>
                      </div>
                </div>
                <div className="h-96 w-auto p-2 bg-white border-2 rounded-md flex flex-col items-center ">
                  <img src={AdollsHouse} alt="" className='h-52 w-auto  rounded-md' />
                    <h1 className='text-blue-600 font-semibold m-2'>A Doll's House</h1>
                      <div>
                        <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Add Review</button>
                        <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Delete Review</button>
                        <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Show Review</button>
                      </div>
                </div>
                <div className="h-96 w-auto p-2 bg-white border-2 rounded-md flex flex-col items-center ">
                  <img src={KaalKiQaidMein} alt="" className='h-52 w-auto  rounded-md' />
                    <h1 className='text-blue-600 font-semibold m-2'>Kaal Ki Qaid Mein</h1>
                      <div>
                        <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Add Review</button>
                        <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Delete Review</button>
                        <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Show Review</button>
                      </div>
                </div>
    
    
            </div>
            <Footer/>
        </>
  )
}

export default Drama