import React from 'react';
import { Component } from 'react';
import {TextField} from 'material-ui';
import {SelectField, MenuItem} from 'material-ui';
import config from '../../appConfig';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';
import {RaisedButton} from 'material-ui';
import {Paper} from 'material-ui';
import { connect } from 'react-redux';
import {pageContainer,
	paginationContainer,
	fieldContainers,
	titleSubtextStyle,
	flexRowFieldsStyle,
	pageButtonStyling,
	smallInputStyle,
	paperContainerStyle} from '../componentStyles';
import {
	ageEntered,
	feetEntered,
	inchesEntered,
	weightEntered,
	weightValidation
} from '../../redux/descriptionPage/description-page-actions';
import description from '../../redux/descriptionPage/description-page-reducer';

class DescriptionPage extends Component{
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
		console.log(this.props.validationError);
		return(
			<Paper style={paperContainerStyle} zDepth={ !this.props.validationError ? 3 : 0}>
				<div style={pageContainer}>
					<h1>Description</h1>
					<div style={fieldContainers}>
						<p style={titleSubtextStyle}>Tell us about yourself.</p>
						<SelectField errorText={this.props.ageErrorText}
							value={this.props.age}
							onChange={(event, index, value)=>this.props.ageEntered(value)}
							floatingLabelText='Age'
						>
							{this.renderMenuItems(config.age)}
						</SelectField>
						<div style={flexRowFieldsStyle}>
							<SelectField errorText={this.props.feetErrorText}
								value={this.props.feet}
								onChange={(event, index, value)=>this.props.feetEntered(value)}
								style={smallInputStyle}
								floatingLabelText='Feet'
							>
								{this.renderMenuItems(config.feet)}
							</SelectField>
							<SelectField errorText={this.props.inchesErrorText}
								value={this.props.inches}
								onChange={(event, index, value)=>this.props.inchesEntered(value)}
								style={smallInputStyle}
								floatingLabelText='Inches'
							>
								{this.renderMenuItems(config.inches)}
							</SelectField>
						</div>
						<TextField value={this.props.weight}
							errorText={ this.props.weightErrorText || ''}
							onChange={(event)=>this.props.weightEntered(event)}
							floatingLabelText='Weight (lbs)'
						/>
					</div>
					<div style={paginationContainer}>
						<RaisedButton  label="Previous Page" onClick={() => this.props.prevPage()} style={pageButtonStyling}></RaisedButton>
					{ (!this.props.validationError)
						&&
						<RaisedButton primary={true}
							label={'Next Page'}
							onClick={() => this.props.changePage()}
							style={pageButtonStyling}>
						</RaisedButton>
					}
					</div>
				</div>
			</Paper>
		);
	}
}

const mapStateToProps = (state) => ({
		age: state.description.age,
		feet: state.description.feet,
		inches: state.description.inches,
		weight: state.description.weight,
		weightErrorText: state.description.weightErrorText,
		ageErrorText: state.description.ageErrorText,
		inchesErrorText: state.description.inchesErrorText,
		feetErrorText: state.description.feetErrorText,
		validationError: state.description.validationError,
});

const mapDispatchToProps = dispatch => bindActionCreators({
	prevPage: () => push('/page-two'),
	changePage: () => push('/page-four'),
	ageEntered: (e) => dispatch(ageEntered(e)),
	feetEntered: (e) => dispatch(feetEntered(e)),
	inchesEntered: (e) => dispatch(inchesEntered(e)),
	weightEntered: (e) => dispatch(weightEntered(e.target.value)),
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DescriptionPage)
