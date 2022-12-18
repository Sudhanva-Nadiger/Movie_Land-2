import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header/Header'
import Footer from './Footer/Footer' 


const SharedLayOut = () => {
  
  return (
    <>
        <Header />
        <section style={{margin:"0 40px"}}>
            <Outlet />
        </section>
        <Footer />
    </>
  )
}

export default SharedLayOut