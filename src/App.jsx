import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import NavBar from './components/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AccordionButton } from 'react-bootstrap'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Count from './components/Count'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <NavBar/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path ='/about' element={<About/>}></Route>
      <Route  path ='/contact' element={<Contact/>}></Route>
      <Route  path ='/services' element={<Services/>}></Route>
      <Route path ='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>
      <Route path='/count' element={<Count/>}></Route>

     </Routes>
     <Footer/>
    </BrowserRouter>
  )
}

export default App
