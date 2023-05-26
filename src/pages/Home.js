import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';
import Projects from '../components/Projects';

// components
import { Popover } from '@mui/material';

// includes
import '../App.css';

function Home() {
  return (
		<section class="cover">
		  
			<div class="cover__hero">
			  <div class="hero__item hero__item--left">
			    <div>SAHENDRIK.SE</div>
			  </div>
			  <div class="hero__item hero__item--right">
				<Projects />
				
			  </div>
		    </div>				
		</section>
		
  );
}

export default Home;
