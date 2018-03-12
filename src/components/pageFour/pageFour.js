import React from 'react';
import { Component } from 'react';
import {SelectField, MenuItem} from 'material-ui';
import config from '../../appConfig';

class PageFour extends Component{
	constructor(props){
		super(props);
		this.renderMenuItems= this.renderMenuItems.bind(this);
	}

	renderMenuItems(list){
		return list.map((item, index) =>
			 (<MenuItem
					key={item}
					primaryText={item}
					value={item}
				/>)
		);
	}

	render(){

		return(
			<div>
				<h1>Page Four</h1>
				<p>
						● Other (If this option is chosen, user must fill in a text box, this box
						is required only of “other” us chosen)
				</p>
				<SelectField floatingLabelText='Favorite Color'>
					{this.renderMenuItems(config.colors)}
				</SelectField>
			</div>
		);
	}
}

export default PageFour;
