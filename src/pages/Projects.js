
import '../App.css';

import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';


import Image1 from '../uk-ctf.png'


function Projects() {
  return (
	<Grid container rowSpacing={ 3 } columnSpacing={ 3 }>
      <Grid item>
        <Box class="card"
		  sx={{
		    maxHeight: 150,
			maxWidth: 450, 
			border: 1
		  }}>
	      <Box
	        sx={{
		      position: 'relative',
		      height: 150,
		      width: 450,
	        }}>
	        <CardMedia
              sx={{
		        position: 'relative',
		        height: 150,
		        width: 450,
		        backgroundImage: `url(${Image1})`,
		        backgroundRepeat: 'no-repeat',
		        backgroundPosition: 'center',
		        opacity:0.3,
              }}>
            </CardMedia>
	        <Box class="status-text" sx={{}}> ACTIVE </Box>
	        <Box class="version-text" sx={{}}><mark> VERSION 0.0.1 </mark></Box>
	        <Box class="year-text" sx={{}}> 2023 — CURRENT </Box>
	        <Box class="updated-text" sx={{}}><mark> UPDATED 14.03.23 </mark></Box>
	        <Box class="project-type-1" sx={{}}><mark> ROM HACKING </mark></Box> 
	      </Box>
	      <Box
            sx={{
		      boxSizing: 'border-box',
		      width: 450,
              height: 125,
		      backgroundColor: '#fff',
		      padding: 2,
            }}>
	        <Typography class="project-heading" variant="h5" component="div">
              リング ∞ / RING: INFINITY Translation
            </Typography>
		    <hr class="project--div"/>
            <Typography class="project-desc" variant="body2" color="text.secondary">
              Using script injection to translate the video-game リング ∞ / RING: INFINITY on WonderSwan.
            </Typography>
	      </Box>
	    </Box>
      </Grid>
    
	<Grid item xs={6}>
       
    </Grid>
    <Grid item xs={6}>
    </Grid>
    <Grid item xs={6}>
    
    </Grid>
  </Grid>
		
  );
}

export default Projects;
