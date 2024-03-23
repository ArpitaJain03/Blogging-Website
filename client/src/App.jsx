import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import SingIn from './Pages/SingIn'
import SignUp from './Pages/SignUp'
import Dashboard from './Pages/Dashboard'
import Projects from './Pages/Projects'

export default function App() {
  return (
   <BrowserRouter>
   
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/sign-in" element={<SingIn/>} />
    <Route path="/sign-up" element={<SignUp/>} />
    <Route path="/dashboard" element={<Dashboard/>} />
    <Route path="/projects" element={<Projects/>} />
   </Routes>
   
   </BrowserRouter>
  )
}

 