import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import Card from './Card';
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
        <div className='w-full h-full bg-gray-900 grid grid-cols-3  gap-6 p-4 pl-4 pr-4'>
              <Card name="Madhusala" image={MadhusalaImg}/>
              <Card name="Kurukshetra" image={KurukshetraImg}/>
              <Card name="Rasmirathi" image={RasmirathiImg}/>
              <Card name="Charag" image={CharagImg}/>
              <Card name="Saaye Mein Dhoop" image={SaayeMeinDhoopImg}/>
              <Card name="Naraaj" image={NaraajImg}/>
              <Card name="Dharti Ki Satah" image={DhartiKiSatahParImg}/>
              <Card name="Titli" image={TitliImg}/>
              <Card name="Adhoore Se Poore" image={AdhooreSePooreImg}/>

        </div>      
      <Footer/>
    </>
  
  )
}

export default Poetry