import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import GodImg from '../images/Fiction/the_god_of_small_things.jpg';
import WhiteTigerImg from '../images/Fiction/white_tiger.jpeg';
import BhagavadGitaImg from '../images/Fiction/Shri_Bhagvat_Geeta.jpeg';  
import GitanjaliImg from '../images/Fiction/gitanjali.jpeg';
import GodaanImg from '../images/Fiction/godaan.jpeg';
import MahabharatImg from '../images/Fiction/mahabharat.jpeg';
import SiddharthaImg from '../images/Fiction/siddhartha.jpeg';
import RamayanaImg from '../images/Fiction/ramayana.jpeg';
import DeathOfVishnuImg from '../images/Fiction/death.jpeg';
import { Link } from 'react-router-dom'; 

const Fiction = () => {
  return (
    <>
    <Navbar/>
        <div className='w-full h-full bg-gray-900 grid grid-cols-3 gap-6 p-4  pl-4 pr-4'>
            <div className="h-96 w-auto p-2 bg-white border-2 rounded-md flex flex-col items-center ">
              <img src={GodImg} alt="God" className='h-64 w-auto object-cover rounded-md' />
                <h1 className='text-blue-600 font-semibold m-2'>The God of Small Things</h1>
                  <div>
                    <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Add Review</button>
                    <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Delete Review</button>
                    <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Show Review</button>
                  </div>
            </div>
            <div className="h-96 w-auto p-2 bg-white border-2 rounded-md flex flex-col items-center ">
              <img src={WhiteTigerImg} alt="the white tiger" className='h-64 w-auto rounded-md' />
                <h1 className='text-blue-600 font-semibold m-2'>The White Tiger</h1>
                  <div>
                    <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Add Review</button>
                    <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Delete Review</button>
                    <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Show Review</button>
                  </div>
            </div>
            <div className="h-96 w-auto p-2 bg-white border-2 rounded-md flex flex-col items-center ">
              <img src={BhagavadGitaImg} alt="Shri Bhagvad Geeta" className='h-52 w-auto rounded-md' />
                <h1 className='text-blue-600 font-semibold m-2'>The Bhagavad Gita</h1>
                  <div>
                    <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Add Review</button>
                    <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Delete Review</button>
                    <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Show Review</button>
                  </div>
            </div>
            <div className="h-96 w-auto p-2 bg-white border-2 rounded-md flex flex-col items-center ">
              <img src={GitanjaliImg} alt="Gitanjali" className='h-52 w-auto  rounded-md' />
                <h1 className='text-blue-600 font-semibold m-2'>Gitanjali</h1>
                  <div>
                    <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Add Review</button>
                    <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Delete Review</button>
                    <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Show Review</button>
                  </div>
            </div>
            <div className="h-96 w-auto p-2 bg-white border-2 rounded-md flex flex-col items-center ">
              <img src={GodaanImg} alt="Godaan" className='h-52 w-auto  rounded-md' />
                <h1 className='text-blue-600 font-semibold m-2'>Godaan</h1>
                  <div>
                    <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Add Review</button>
                    <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Delete Review</button>
                    <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Show Review</button>
                  </div>
            </div>
            <div className="h-96 w-auto p-2 bg-white border-2 rounded-md flex flex-col items-center ">
              <img src={MahabharatImg} alt="Mahabharat" className='h-64 w-auto  rounded-md' />
                <h1 className='text-blue-600 font-semibold m-2'>Mahabharat</h1>
                  <div>
                    <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Add Review</button>
                    <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Delete Review</button>
                    <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Show Review</button>
                  </div>
            </div>
            <div className="h-96 w-auto p-2 bg-white border-2 rounded-md flex flex-col items-center ">
              <img src={SiddharthaImg} alt="Siddhartha" className='h-52 w-auto  rounded-md' />
                <h1 className='text-blue-600 font-semibold m-2'>Siddhartha</h1>
                  <div>
                    <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Add Review</button>
                    <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Delete Review</button>
                    <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Show Review</button>
                  </div>
            </div>
            <div className="h-96 w-auto p-2 bg-white border-2 rounded-md flex flex-col items-center ">
              <img src={RamayanaImg} alt="The Ramayana" className='h-52 w-auto  rounded-md' />
                <h1 className='text-blue-600 font-semibold m-2'>Ramayana</h1>
                  <div>
                    <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Add Review</button>
                    <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Delete Review</button>
                    <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Show Review</button>
                  </div>
            </div>
            <div className="h-96 w-auto p-2 bg-white border-2 rounded-md flex flex-col items-center ">
              <img src={DeathOfVishnuImg} alt="death of vishnu" className='h-52 w-auto  rounded-md' />
                <h1 className='text-blue-600 font-semibold m-2'>The Death of Vishnu</h1>
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

export default Fiction