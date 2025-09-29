import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import Card from './Card';
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
        <div className='w-full h-full bg-gray-900 grid grid-cols-3  gap-6 p-4 pl-4 pr-4'>
              <Card name="Ramayana" image={RamayanaImg} />
              <Card name="Bhagavad Gita" image={BhagavadGitaImg} />
              <Card name="Gitanjali" image={GitanjaliImg} />
              <Card name="Mahabharat" image={MahabharatImg} />
              <Card name="Death Of Vishnu" image={DeathOfVishnuImg} />
              <Card name="Siddhartha" image={SiddharthaImg} />
              <Card name="God" image={GodImg} />
              <Card name="Goodan" image={GodaanImg} />
              <Card name="White Tiger" image={WhiteTigerImg} />
        </div>
      <Footer/> 
    </>
  )
}

export default Fiction