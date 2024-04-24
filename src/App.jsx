import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import { useRoutes } from 'react-router-dom'

function App() {

  let element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
  ])

  return (
    <>
      {element}
    </>
  )
}

export default App
