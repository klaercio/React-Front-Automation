import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Login from './Pages/Login/index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './styles/global';
import Home from './Pages/Home';
import BasePages from './components/BasePages';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='home' element={<BasePages />}>
          <Route></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    <GlobalStyle/>
  </React.StrictMode>,
)
