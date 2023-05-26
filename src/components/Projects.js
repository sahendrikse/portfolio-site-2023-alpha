
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
import GitHubIcon from '@mui/icons-material/GitHub';


import Image1 from '../media/uk-ctf-bg.png';
import Image2 from '../media/ring-bg.png';


function Projects() {
  return (
  
	<Grid container rowSpacing={ 3 } columnSpacing={ 3 }>
      <Grid item>
        <Box class="card"
		  sx={{
		    maxHeight: 150,
			maxWidth: 450, 
			border: 0,
		  }}>
	      <Box
	        sx={{
		      position: 'relative',
		      height: 150,
		      width: 450,
			  backgroundColor: '#000000',
	        }}>
	        <CardMedia
              sx={{
		        position: 'relative',
		        height: 150,
		        width: 450,
		        backgroundImage: `url(${Image2})`,
		        backgroundRepeat: 'no-repeat',
		        backgroundPosition: 'center',
		        opacity:0.4,
              }}>
            </CardMedia>
	        <Box class="status-text" sx={{}}> ACTIVE </Box>
	        <Box class="version-text" sx={{}}><mark> VERSION 0.0.1 </mark></Box>
	        <Box class="year-text" sx={{}}> 2023 — CURRENT </Box>
	        <Box class="updated-text" sx={{}}> UPDATED 14.03.23 </Box>
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
	<Grid item>
      <Box class="card"
		  sx={{
		    maxHeight: 150,
			maxWidth: 450, 
			border: 0,
		  }}>
	      <Box
	        sx={{
		      position: 'relative',
		      height: 150,
		      width: 450,
			  backgroundColor: '#000000',
	        }}>
	        <CardMedia
              sx={{
		        position: 'relative',
		        height: 150,
		        width: 450,
		        backgroundImage: `url(${Image1})`,
		        backgroundRepeat: 'no-repeat',
		        backgroundPosition: 'center',
		        opacity:0.4,
              }}>
            </CardMedia>
	        <Box class="status-text" sx={{}}> INACTIVE </Box>
			<Box class="card-icon" sx={{fontSize:60}}><GitHubIcon/></Box>
	        <Box class="version-text" sx={{}}><mark> VERSION 2.0.1d </mark></Box>
	        <Box class="year-text" sx={{}}> 2017 — 2019 </Box>
	        <Box class="project-type-1" sx={{}}><mark> PHP </mark></Box> 
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
              UK-CTF
            </Typography>
		    <hr class="project--div"/>
            <Typography class="project-desc" variant="body2" color="text.secondary">
              Defunct community that followed UK-based CTF competitions, rankings, and event write-ups.
            </Typography>
	      </Box>
	    </Box>   
    </Grid>
    <Grid item>
	  <Box class="card"
		  sx={{
		    maxHeight: 150,
			maxWidth: 450, 
			border: 0,
		  }}>
	      <Box
	        sx={{
		      position: 'relative',
		      height: 150,
		      width: 450,
			  backgroundColor: '#000000',
	        }}>
	        <CardMedia
              sx={{
		        position: 'relative',
		        height: 150,
		        width: 450,
		        backgroundImage: `url(${Image1})`,
		        backgroundRepeat: 'no-repeat',
		        backgroundPosition: 'center',
		        opacity:0.4,
              }}>
            </CardMedia>
	        <Box class="status-text" sx={{}}> COMPLETED </Box>
			<Box class="version-text" sx={{}}><mark> PAPER </mark></Box>
	        <Box class="year-text" sx={{}}> 2016 — 2017 </Box>
	        <Box class="project-type-1" sx={{}}><mark> CYBERSEC </mark></Box> 
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
              Windows-based Shellcode Detection using PE Binary Analysis
            </Typography>
		    <hr class="project--div"/>
            <Typography class="project-desc" variant="body2" color="text.secondary">
              Thesis in comparing existing research-based solutions for the detection of shellcodes.
            </Typography>
	      </Box>
	    </Box>   
    </Grid>
    <Grid item>
        <Box class="card"
		  sx={{
		    maxHeight: 150,
			maxWidth: 450, 
			border: 0,
		  }}>
	      <Box
	        sx={{
		      position: 'relative',
		      height: 150,
		      width: 450,
			  backgroundColor: '#000000',
	        }}>
	        <CardMedia
              sx={{
		        position: 'relative',
		        height: 150,
		        width: 450,
		        backgroundImage: `url(${Image1})`,
		        backgroundRepeat: 'no-repeat',
		        backgroundPosition: 'center',
		        opacity:0.4,
              }}>
            </CardMedia>
	        <Box class="status-text" sx={{}}> </Box>
			<Box class="version-text" sx={{}}><mark> PROTOTYPING </mark></Box>
	        <Box class="project-type-1" sx={{}}><mark> PROGRAMMING </mark></Box> 
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
              Repos
            </Typography>
		    <hr class="project--div"/>
            <Typography class="project-desc" variant="body2" color="text.secondary">
              Various miscellanous programming prototypes in different languages, focusing on Python and Java.
            </Typography>
	      </Box>
	    </Box>  
    </Grid>
  </Grid>
		
  );
}

export default Projects;
