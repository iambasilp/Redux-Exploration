import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Service from './Components/Service/Service'
import Contact from './Components/Contact/Contact'
import Info from './Components/Info/Info'
import { Routes,Route } from 'react-router-dom'



const App = () => {
  return (
   <>
    <Navbar />
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/service' element={<Service/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/Info' element={<Info/>}/>
    </Routes>
   </>
  )
}

export default App
