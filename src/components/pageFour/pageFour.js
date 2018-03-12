import React from 'react';
import { Component } from 'react';

class PageFour extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div>
				<h1>Page Four</h1>
				<p>
					Favorite color (required, choose from list below)
						● Red
						● Orange
						● Yellow
						● Green
						● Blue
						● Purple
						● Other (If this option is chosen, user must fill in a text box, this box
						is required only of “other” us chosen)
				</p>
			</div>
		);
	}
}

export default PageFour;
