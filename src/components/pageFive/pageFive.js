import React from 'react';
import { Component } from 'react';

class PageFive extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
				<h1>Page Five</h1>
				<div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'center', width:'100%'}}>
				<p>
					Finish page: no data collected, thank you / confirmation message displayed to user
				</p>
			</div>
			</div>
		);
	}
}

export default PageFive;
