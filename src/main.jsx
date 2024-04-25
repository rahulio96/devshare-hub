import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './routes/Layout.jsx';
import Home from './components/home/Home.jsx';
import Create from './components/create-post/Create.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index={true} element={<Home />} />
          <Route index={true} path="/create" element={<Create/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
