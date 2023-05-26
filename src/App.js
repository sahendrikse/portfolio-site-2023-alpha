import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';

import logo from './logo.svg';

// components
import BackgroundVideo from './components/BackgroundVideo';
import Title from './components/Title';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './components/Projects';
// includes
import './App.css';

function App() {
  return (
    
	<div>
	
      <BackgroundVideo/ >
      <Title/ >
	  <Navbar/ >
	  <Home/ >
	  
	  <Footer/ >	
	  
    </div>
  );
}

export default App;
