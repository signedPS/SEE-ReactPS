import React from 'react';
import { Component } from 'react';
import {TextField} from 'material-ui';
import {SelectField, MenuItem} from 'material-ui';
import config from '../../appConfig';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import description, {
	ageEntered,
	feetEntered,
	inchesEntered,
	weightEntered,
	weightValidation
} from './descriptionRedux';


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
					<SelectField value={this.props.age} onChange={(event, index, value)=>this.props.ageEntered(value)} floatingLabelText='Age'>{this.renderMenuItems(config.age)}</SelectField>
					<div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', alignItems:'flex-start', width:'27%'}}>
						<SelectField value={this.props.feet} onChange={(event, index, value)=>this.props.feetEntered(value)} style={{width:'35%'}} floatingLabelText='Feet'>{this.renderMenuItems(config.feet)}</SelectField>
						<SelectField value={this.props.inches} onChange={(event, index, value)=>this.props.inchesEntered(value)} style={{width:'35%'}} floatingLabelText='Inches'>{this.renderMenuItems(config.inches)}</SelectField>
					</div>
					<TextField value={this.props.weight}
						onBlur={(e) => this.props.weightValidation(e)}
						errorText={ this.props.weightErrorText || ''}
						onChange={(event)=>this.props.weightEntered(event)}
						floatingLabelText='Weight (lbs)'
					/>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
		age: state.description.age,
		feet: state.description.feet,
		inches: state.description.inches,
		weight: state.description.weight,
		weightErrorText: state.description.weightErrorText,
});

const mapDispatchToProps = dispatch => bindActionCreators({
	ageEntered: (e) => dispatch(ageEntered(e)),
	feetEntered: (e) => dispatch(feetEntered(e)),
	inchesEntered: (e) => dispatch(inchesEntered(e)),
	weightEntered: (e) => dispatch(weightEntered(e.target.value)),
	weightValidation: (e) => dispatch(weightValidation(e.target.value))
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageThree)
