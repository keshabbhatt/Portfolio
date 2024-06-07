import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './Home'
import Navbar from './Navbar'
import Footer from './Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
     <Home/>
     <Footer/>
    </>
  )
}

export default App
