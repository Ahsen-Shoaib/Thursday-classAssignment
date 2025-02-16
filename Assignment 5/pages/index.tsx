import React from 'react'
import Header from '../components/Header';
import Hero1 from '../components/Hero1';
import { Libre_Bodoni } from 'next/font/google';

const libreBodoni = Libre_Bodoni({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], 
});

const  Home = () => {
  return (
    <>
    <Header/>
    <div  className={libreBodoni.className}> <Hero1/> </div>
    </>)
}

export default  Home;