import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import MadhusalaImg from '../images/Poetry/Madhusala.jpeg';
import KurukshetraImg from '../images/Poetry/kurukshetra.jpeg';
import RasmirathiImg from '../images/Poetry/Rasmirathi.jpeg';
import CharagImg from '../images/Poetry/Charag.jpeg';
import SaayeMeinDhoopImg from '../images/Poetry/Saaye mein Dhoop.jpeg';
import NaraajImg from '../images/Poetry/Naraaj.jpeg';
import DhartiKiSatahParImg from '../images/Poetry/Dharti Ki Satah Par.jpeg';
import TitliImg from '../images/Poetry/Titli.jpeg';
import AdhooreSePooreImg from '../images/Poetry/Adhoore se Poore.jpeg';  


function Poetry() {
  return (
    <>
        <Navbar/>
            <div className='w-full h-full bg-gray-900 grid grid-cols-3  gap-6 p-4 flex flex-col items-center pl-4 pr-4'>
                <div className="h-96 w-auto p-2 bg-white border-2 rounded-md flex flex-col items-center ">
                  <img src={MadhusalaImg} alt="" className='h-52 w-auto object-cover rounded-md' />
                    <h1 className='text-blue-600 font-semibold m-2'>MadhuShala </h1>
                      <div>
                        <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Add Review</button>
                        <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Delete Review</button>
                        <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Show Review</button>
                      </div>
                </div>
                <div className="h-96 w-auto p-2 bg-white border-2 rounded-md flex flex-col items-center ">
                  <img src={KurukshetraImg} alt="" className='h-52 w-auto rounded-md' />
                    <h1 className='text-blue-600 font-semibold m-2'>Kurukshetra</h1>
                      <div>
                        <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Add Review</button>
                        <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Delete Review</button>
                        <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Show Review</button>
                      </div>
                </div>
                <div className="h-96 w-auto p-2 bg-white border-2 rounded-md flex flex-col items-center ">
                  <img src={RasmirathiImg} alt="" className='h-52 w-auto rounded-md' />
                    <h1 className='text-blue-600 font-semibold m-2'>Rasmirathi</h1>
                      <div>
                        <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Add Review</button>
                        <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Delete Review</button>
                        <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Show Review</button>
                      </div>
                </div>
                <div className="h-96 w-auto p-2 bg-white border-2 rounded-md flex flex-col items-center ">
                  <img src={CharagImg} alt="" className='h-52 w-auto  rounded-md' />
                    <h1 className='text-blue-600 font-semibold m-2'>Charag </h1>
                      <div>
                        <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Add Review</button>
                        <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 mt-0 mb-0 ml-1 mr-1'>Delete Review</button>
                        <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Show Review</button>
                      </div>
                </div>
                <div className="h-96 w-auto p-2 bg-white border-2 rounded-md flex flex-col items-center ">
                  <img src={SaayeMeinDhoopImg} alt="" className='h-52 w-auto  rounded-md' />
                    <h1 className='text-blue-600 font-semibold m-2'>Saaye mein Dhoop</h1>
                      <div>
                        <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Add Review</button>
                        <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Delete Review</button>
                        <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Show Review</button>
                      </div>
                </div>
                <div className="h-96 w-auto p-2 bg-white border-2 rounded-md flex flex-col items-center ">
                  <img src={NaraajImg} alt="" className='h-52 w-auto  rounded-md' />
                    <h1 className='text-blue-600 font-semibold m-2'>Naraaj</h1>
                      <div>
                        <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Add Review</button>
                        <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Delete Review</button>
                        <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Show Review</button>
                      </div>
                </div>
                <div className="h-96 w-auto p-2 bg-white border-2 rounded-md flex flex-col items-center ">
                  <img src={DhartiKiSatahParImg} alt="" className='h-52 w-auto  rounded-md' />
                    <h1 className='text-blue-600 font-semibold m-2'>Dharti Ki Satah Par</h1>
                      <div>
                        <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Add Review</button>
                        <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Delete Review</button>
                        <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Show Review</button>
                      </div>
                </div>
                <div className="h-96 w-auto p-2 bg-white border-2 rounded-md flex flex-col items-center ">
                  <img src={TitliImg} alt="" className='h-52 w-auto  rounded-md' />
                    <h1 className='text-blue-600 font-semibold m-2'>Titli</h1>
                      <div>
                        <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Add Review</button>
                        <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Delete Review</button>
                        <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Show Review</button>
                      </div>
                </div>
                <div className="h-96 w-auto p-2 bg-white border-2 rounded-md flex flex-col items-center ">
                  <img src={AdhooreSePooreImg} alt="" className='h-52 w-auto  rounded-md' />
                    <h1 className='text-blue-600 font-semibold m-2'>Adhoore se Poore</h1>
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

export default Poetry