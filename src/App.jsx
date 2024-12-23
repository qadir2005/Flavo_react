import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar.jsx';
import TopOffer from './Components/TopOffer.jsx';
import HeroSection from './Components/HeroSection.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
  <TopOffer />
  <Navbar />
  <div className='h-12 bg-secondary'></div>
   <HeroSection />
   </>
  )
}

export default App
