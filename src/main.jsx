import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './routes/Layout.jsx';
import Home from './components/home/Home.jsx';
import Create from './components/create-post/Create.jsx';
import PostDetailView from './routes/PostDetailView.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index={true} element={<App />} />
          <Route index={true} path="/create" element={<Create/>} />
          <Route index={true} path="/posts/:id" element={<PostDetailView/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
