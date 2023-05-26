import React from 'react';
import classes from './Navbar.module.css';
import { Link } from "react-router-dom";
import Home from '../pages/Home';


const Navbar = () => {
	
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
	
	
	return (

	<div className={classes.nav__container} >
		<div className={classes.nav__button} ><span>PROJECTS</span></div>
		<div className={classes.nav__button} ><span>MEDIA</span></div>
		<div className={classes.nav__button} ><a href="https://medium.com/@sahendrikse"><span>ARTICLES</span></a></div>
	</div>

	
	);
}

export default Navbar;