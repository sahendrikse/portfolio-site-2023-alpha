import React from 'react';
import styles from './Title.module.css';
import { Box } from '@mui/material';
import Logo from '../media/favicon.svg';
const Title = () => {
	const pathname = window.location.pathname //returns the current url minus the domain name
	
	return (
	
	<section>
		
		<a href='/'>
		<Box className={styles.title} bgcolor="error.main"
        component="img"
        sx={{
		  my:2,
		  ml:2,
		  borderRadius: '16px',
          height: 75,
          width: 75,
          maxHeight: { xs: 75, md: 75 },
          maxWidth: { xs: 75, md: 75 },
        }}
        src={Logo}
      />
	  </a>
	
	</section>
	
	);
}

export default Title;