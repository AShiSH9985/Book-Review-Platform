import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import Card from './Card';
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
              <Card name="Sapiens" image={SapiensImg}/>
              <Card name="Educated" image={EducatedImg}/>
              <Card name="Atomic Habits" image={AtomicHabitsImg}/>
              <Card name="Dairy Of Young Girl" image={DiaryOfYoungGirlImg}/>
              <Card name="Mans Search For Meaning" image={MansSearchForMeaningImg}/>
              <Card name="Thinking Fast And Slow" image={ThinkingFastAndSlowImg}/>
              <Card name="Outliers" image={OutliersImg}/>
              <Card name="Becoming" image={BecomingImg}/>
              <Card name="Born A Crime" image={BornACrimeImg}/>
          </div>
        <Footer/>
        </>
  )
}

export default Non_Fiction