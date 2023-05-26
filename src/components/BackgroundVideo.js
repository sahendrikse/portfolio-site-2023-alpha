import React from 'react';
import source from './bg.mp4';
import classes from './BackgroundVideo.module.css';

const BackgroundVideo = () => {
		return (
			<div className={classes.Container} >
				<video autoPlay="autoplay" loop="loop" muted className={classes.Video} >
					<source src={source} type="video/mp4" />
				</video>
			</div>
  );
}

export default BackgroundVideo;