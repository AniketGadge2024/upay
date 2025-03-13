import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './MainPage';
import './App.css';

import Pics from './Components/Pics';
import Error from './Components/error';
import Registration from './Components/RegistraionForm/Registration';
import RegisReview from './Components/RegistraionForm/RegisReview';
import Contact from './Components/ContactPage/Contact';


const App = () => {
  return (
    <>
    
      <div className="App-main-div">
        <Router>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/contact' element={<Contact></Contact>} />
            <Route path='/pics' element={<Pics />} />
            <Route path='*' element={<Error />} />
            <Route path='/Registration' element={<Registration></Registration>} />
            <Route path='/Review' element={<RegisReview></RegisReview>} />
          </Routes>
        </Router>
      </div>

     
      <div className="error-page"><Error></Error></div>
    </>
  );
};

export default App;
