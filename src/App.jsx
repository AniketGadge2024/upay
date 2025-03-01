import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './MainPage';
import './App.css';
import Contact from './Components/Contact';
import Pics from './Components/Pics';
import Error from './Components/error';

const App = () => {
  return (
    <>
    
      <div className="App-main-div">
        <Router>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/pics' element={<Pics />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </Router>
      </div>

     
      <div className="error-page"><Error></Error></div>
    </>
  );
};

export default App;
