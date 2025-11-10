import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Outlet } from 'react-router'
import Footer from '../components/footer/Footer'
import  Features  from '../components/features/Features'

function MainLayout() {
  return (
    <div className=' bg-gray-800 h-auto text-white'>
      <div className="max-w-screen-2xl mx-auto px-16">
         <Navbar  />
        <Outlet/>
        <Features/>
        <Footer/>
      </div>
     
    </div>
  )
}

export default MainLayout