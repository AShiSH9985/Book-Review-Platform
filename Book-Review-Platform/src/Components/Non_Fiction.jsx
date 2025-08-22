import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import SapiensImg from '../images/Non-Fiction/sapiens.jpeg';
import EducatedImg from '../images/Non-Fiction/educated.jpeg';
import AtomicHabitsImg from '../images/Non-Fiction/atomic_habits.jpeg';
import DiaryOfYoungGirlImg from '../images/Non-Fiction/diary.jpeg';
import MansSearchForMeaningImg from "../images/Non-Fiction/Man's.jpeg";
import ThinkingFastAndSlowImg from '../images/Non-Fiction/thinking.jpeg';
import OutliersImg from '../images/Non-Fiction/outliers.jpeg';
import BecomingImg from '../images/Non-Fiction/becoming.jpeg';
import BornACrimeImg from '../images/Non-Fiction/Born_a_crime.jpeg';

function Non_Fiction() {
  return (
    <>
        <Navbar/>
            <div className='w-full h-full bg-gray-900 grid grid-cols-3  gap-6 p-4 pl-4 pr-4'>
                <div className="h-96 w-auto p-2 bg-white border-2 rounded-md flex flex-col items-center ">
                  <img src={SapiensImg} alt="" className='h-52 w-auto object-cover rounded-md' />
                    <h1 className='text-blue-600 font-semibold m-2'>Sapiens </h1>
                      <div>
                        <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Add Review</button>
                        <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Delete Review</button>
                        <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Show Review</button>
                      </div>
                </div>
                <div className="h-96 w-auto p-2 bg-white border-2 rounded-md flex flex-col items-center ">
                  <img src={EducatedImg} alt="" className='h-52 w-auto rounded-md' />
                    <h1 className='text-blue-600 font-semibold m-2'>Educated</h1>
                      <div>
                        <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Add Review</button>
                        <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Delete Review</button>
                        <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Show Review</button>
                      </div>
                </div>
                <div className="h-96 w-auto p-2 bg-white border-2 rounded-md flex flex-col items-center ">
                  <img src={AtomicHabitsImg} alt="" className='h-52 w-auto rounded-md' />
                    <h1 className='text-blue-600 font-semibold m-2'>Atomic Habits</h1>
                      <div>
                        <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Add Review</button>
                        <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Delete Review</button>
                        <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Show Review</button>
                      </div>
                </div>
                <div className="h-96 w-auto p-2 bg-white border-2 rounded-md flex flex-col items-center ">
                  <img src={DiaryOfYoungGirlImg} alt="" className='h-52 w-auto  rounded-md' />
                    <h1 className='text-blue-600 font-semibold m-2'>The Diary of a Young Girl </h1>
                      <div>
                        <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Add Review</button>
                        <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 mt-0 mb-0 ml-1 mr-1'>Delete Review</button>
                        <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Show Review</button>
                      </div>
                </div>
                <div className="h-96 w-auto p-2 bg-white border-2 rounded-md flex flex-col items-center ">
                  <img src={MansSearchForMeaningImg} alt="" className='h-48 w-auto  rounded-md' />
                    <h1 className='text-blue-600 font-semibold m-2'>Man’s Search for Meaning</h1>
                      <div>
                        <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Add Review</button>
                        <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 mt-0 mb-0 ml-1 mr-1'>Delete Review</button>
                        <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Show Review</button>
                      </div>
                </div>
                <div className="h-96 w-auto p-2 bg-white border-2 rounded-md flex flex-col items-center ">
                  <img src={ThinkingFastAndSlowImg} alt="" className='h-52 w-auto  rounded-md' />
                    <h1 className='text-blue-600 font-semibold m-2'>Thinking, Fast and Slow</h1>
                      <div>
                        <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Add Review</button>
                        <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Delete Review</button>
                        <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Show Review</button>
                      </div>
                </div>
                <div className="h-96 w-auto p-2 bg-white border-2 rounded-md flex flex-col items-center ">
                  <img src={OutliersImg} alt="" className='h-52 w-auto  rounded-md' />
                    <h1 className='text-blue-600 font-semibold m-2'>Outliers</h1>
                      <div>
                        <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Add Review</button>
                        <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Delete Review</button>
                        <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Show Review</button>
                      </div>
                </div>
                <div className="h-96 w-auto p-2 bg-white border-2 rounded-md flex flex-col items-center ">
                  <img src={BecomingImg} alt="" className='h-52 w-auto  rounded-md' />
                    <h1 className='text-blue-600 font-semibold m-2'>Becoming</h1>
                      <div>
                        <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Add Review</button>
                        <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Delete Review</button>
                        <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Show Review</button>
                      </div>
                </div>
                <div className="h-96 w-auto p-2 bg-white border-2 rounded-md flex flex-col items-center ">
                  <img src={BornACrimeImg} alt="" className='h-52 w-auto  rounded-md' />
                    <h1 className='text-blue-600 font-semibold m-2'>Born a Crime</h1>
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

export default Non_Fiction