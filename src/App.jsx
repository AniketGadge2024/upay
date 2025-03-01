import React from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './MainPage';
import './App.css'
import Header from './Header';
import Contact from './Components/Contact';
import Pics from './Components/Pics';
const App = () => {
  return (
  
      <Router>
       
          <Routes>
            <Route path='/' element={<MainPage></MainPage>}/>
            <Route path='/contact' element={<Contact></Contact>}/>
            <Route path='/pics' element={<Pics></Pics>}/>
          </Routes>
       
      </Router>
     

  )
}

export default App
