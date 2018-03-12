import React from 'react';
import { Component } from 'react';
import {TextField} from 'material-ui';
import {SelectField, MenuItem} from 'material-ui';
import config from '../../appConfig';

class PageThree extends Component{
	constructor(props){
		super(props);
		this.renderMenuItems = this.renderMenuItems.bind(this);
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
				<h1>Page Three</h1>
				<ul>
					<li>Age (required, choose from ranges below): 17 or younger, 18-25, 26-35, 36-45, 46 or older</li>
					<li>Height (required, separate boxes for feet and inches, must be valid numeric input)</li>
					<li>Weight (optional, but if entered must be valid numeric input)</li>
				</ul>
				<div style={{display:'flex', flexDirection:'column', justifyContent: 'space-around', alignItems:'flex-start', width:'100%'}}>
					<SelectField floatingLabelText='Age'>{this.renderMenuItems(config.age)}</SelectField>
					<div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', alignItems:'flex-start', width:'27%'}}>
						<SelectField style={{width:'35%'}} floatingLabelText='Feet'>{this.renderMenuItems(config.feet)}</SelectField>
						<SelectField style={{width:'35%'}} floatingLabelText='Inches'>{this.renderMenuItems(config.inches)}</SelectField>
					</div>
					<SelectField floatingLabelText='Weight'/>
				</div>
			</div>
		);
	}
}

export default PageThree;
