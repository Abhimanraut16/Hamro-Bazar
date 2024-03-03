import React from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import NavItems from './component/NavItems/NavItems'
import Footer from './component/Footer/Footer'
// import Home from './component/Home/Home'

function App() {
  return (
    <div>
      <NavItems />
      <div className='min-vh-100'>
        <Outlet />
      </div>

      <Footer />
    </div>
  )
}

export default App