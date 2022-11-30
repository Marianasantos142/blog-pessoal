import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './paginas/home/Home';
import { Grid } from '@material-ui/core';
import Navbar from './componetes/estaticos/navbar/Navbar';
import Footer from './componetes/estaticos/footer/Footer';
import Login from './paginas/Login/Login';


function App() {
  return (

    <>
      <Router>
        <Navbar />
        <Routes>


          <Route path='/home' element={<Home />} />

          <Route path='/login' element={<Login />} />

        </Routes>
        <Footer />

      </Router>







    </>
  );
}
export default App;
