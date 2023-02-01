import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ExerciseDetail from './pages/ExerciseDetail'
import Footer from './components/Footer'
import './app.css'

class App extends Component {
  render() {
    return (
      <div className='m-auto max-w-screen-2xl'>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/exercise/:id' element={<ExerciseDetail />} />
        </Routes>
        <Footer />
      </div>
    )
  }
}

export default App
