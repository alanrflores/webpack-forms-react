import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../navbar/Navbar.jsx'

const Layout = () => {
  return (
    <>
      <Navbar />
      <div>
      <Outlet />  
      </div>
    </>
  )
}

export default Layout