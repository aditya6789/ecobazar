'use client';
import Image from 'next/image'
import HomePage from './home/page'
import Footer from './components/footer/footer'
import { Component, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';

export default function Home() {

  useEffect(() => {
    AOS.init({
      offset:200,
         duration: 800,
    
         easing: 'ease-in-sine',
         delay:100
       })
 }, [])
  
  return (
   <main>
    <HomePage/>
   </main>
  )
}
