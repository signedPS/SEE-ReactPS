import React from 'react';
import { Component } from 'react';
import {TextField} from 'material-ui';

class PageTwo extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div>
				<h1>Page Two</h1>
				<p> Valid Email Address</p>
					<TextField id='firstName'
						hintText='Enter Valid Email'
						floatingLabelText='Email'
					/>
			</div>
		);
	}
}

export default PageTwo;
