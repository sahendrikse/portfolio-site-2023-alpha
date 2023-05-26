import React from 'react';
import styles from './Footer.module.css';
import cx from 'classnames';

import { Popover } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
	return (
	
			<div className={styles.social__bar} >
			
			  <a href="https://www.linkedin.com/in/sahendrikse"><span className={styles.social__ico} ><LinkedInIcon style={{ fontSize: 30 }}>linkedin</LinkedInIcon></span></a>
			  <a href="https://www.twitter.com/sahendrikse"><span className={styles.social__ico} ><TwitterIcon style={{ fontSize: 30 }}>twitter</TwitterIcon></span></a>
			  <a href="https://github.com/sahendrikse"><span className={styles.social__ico} ><GitHubIcon style={{ fontSize: 30 }}>github</GitHubIcon></span></a>
			  
			</div>
			
			
	);
}

export default Footer;