import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Login from './Pages/Login/index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './styles/global';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}/>
      </Routes>
    </BrowserRouter>
    <GlobalStyle/>
  </React.StrictMode>,
)
