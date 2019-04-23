import React, { Component } from 'react';
import Starfield from '../js/canvas-starfield';

class StarfieldCanvas extends Component {
	state = {
		starfield: null
	};
	componentDidMount() {
		const starfield = new Starfield({
			canvas: '#starfield',
			numStars: 400,
			maxRadius: 2,
			shootingStarInterval: 3
		});
		starfield.start();
		this.setState((state) => ({ starfield }));
	}

	render() {
		return (
			<canvas
				id="starfield"
				style={{
					zIndex: -20,
					position: 'fixed',
					top: 0,
					left: 0,
					bottom: 0,
					right: 0,
					width: '100%',
					maxWidth:'100vw',
					height: '100%',
					objectFit: 'cover',
					opacity: 0.97
				}}
			/>
		);
	}
}

export default StarfieldCanvas;