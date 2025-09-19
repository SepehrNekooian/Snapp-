import React, { useState } from 'react'
import Header from './components/Header'

import "./assets/App.css"
import Feature from './components/Feature'
import Blog from './components/Blog'
import About from './components/About'
import Testimonian from './components/Testimonian'
import Contact from './components/Contact'
import Footer from './components/shared/Footer'
import Banner from './components/shared/Banner'
import Slidder from './components/Slidder'





const App = () => {





  return (
    <div className='bg-white'>
    <Header/>
    <Banner/>
    <Feature/>
    <Blog/>
    <About/>
    <Testimonian/>
    <Contact/>
    <Slidder/>
    <Footer/>
    
    
    
    
    
    </div>
  )
}

export default App;
