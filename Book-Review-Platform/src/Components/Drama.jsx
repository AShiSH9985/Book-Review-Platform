import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import Card from './Card';
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
            <div className='w-full h-full bg-gray-900 grid grid-cols-3  gap-6 p-4 pl-4 pr-4'>
              <Card name="Andha Yug" image={AndhaYug} />
              <Card name="The Blue Moon Day" image={TheBlueMoonDay} />
              <Card name="A Dolls House" image={AdollsHouse} />
              <Card name="Hayavadana" image={Hayavadana} />
              <Card name="DOllar Bahu" image={DollarBahu} />
              <Card name="Lean Days" image={LeanDays} />
              <Card name="Wedding Pickle" image={WeddingPickle} />
              <Card name="Kaal Ki Qaid Mein" image={KaalKiQaidMein} />
              <Card name="Kamala" image={Kamala} />
            </div>
        <Footer/>
        </>
  )
}

export default Drama