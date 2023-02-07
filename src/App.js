import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ExerciseDetail from './pages/ExerciseDetail'
import Footer from './components/Footer'
import './app.css'

const App = () => {
  return (
    <div className='container my-5 mx-5 overflow-x-hidden'>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/exercise/:id' element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
