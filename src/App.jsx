import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'

function App() {
  const [search, setSearch] = useState('')
  
  return (
    <>
      <Navbar setSearch={setSearch} />
      <Home search={search} />
    </>
  )
}

export default App
