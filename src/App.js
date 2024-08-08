import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/login';
import SignUp from './components/signup';
import Home from './components/home';





function App() {
  return (
   <>
     <Router>

      <Navbar />
      <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} /> 
    </Routes>

</Router>
   </>
  );
}

export default App;
