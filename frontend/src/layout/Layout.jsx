import React from 'react'
import Footer from '../components/footer/Footer'
import Nav from '../components/Nav'

function Layout({children}) {
  return (
    <div className='w-full h-screen border-black border-8'>
        <Nav/>
        {children}
        <Footer/>
    </div>
  )
}

export default Layout