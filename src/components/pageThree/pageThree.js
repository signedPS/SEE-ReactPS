import React from 'react';
import { Component } from 'react';

class PageThree extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div>
				<h1>Page Three</h1>
				<ul>
					<li>Age (required, choose from ranges below): 17 or younger, 18-25, 26-35, 36-45, 46 or older</li>
					<li>Height (required, separate boxes for feet and inches, must be valid numeric input)</li>
					<li>Weight (optional, but if entered must be valid numeric input)</li>
				</ul>
			</div>
		);
	}
}

export default PageThree;
