import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import './MainBody.css'
import Steps from './Steps'
import Features from './Features'
import Footer from './footer' // Change the import name to uppercase
const MainBody = () => {
  return (
    <>
    <div className='Main-Container'>
      <Navbar/>
    </div>
    <div >
      <Hero/>
    </div>
    <div>
      <Features/>
    </div>
    <div>
      <Steps/>
    </div>
    <div>
      <Footer/> 
    </div>
  </>)
}

export default MainBody