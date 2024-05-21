import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar1 from './components/Navbar1'
import Home from './components/Home'
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Detail from './components/Detail'
import Trial from './components/Trial'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
    <Navbar1/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/detail' element={<Detail/>}></Route>
      <Route path='/trial' element={<Trial/>}></Route>

      
    </Routes>
    
    </Router>
      
       
    </>
  )
}

export default App
