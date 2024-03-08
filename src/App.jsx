import { useState } from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Services from './components/Services'
import Carousels from './components/Carousels'
import Footer from './components/Footer'
import Form from './components/Form'
import './App.css'

const images = [
  '/image/Imagen1.jpg',
  '/image/Imagen2.jpg',
  '/image/Imagen3.webp',
  '/image/Imagen4.jpg',
];

function App() {

  return (
    <>
      <NavBar/>
      <Hero/>
      <Services/>
      <Carousels images={images}/>
      <Form/>
      <Footer/>
    </>
  )
}

export default App
