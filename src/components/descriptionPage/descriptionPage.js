import React from 'react';
import { Component } from 'react';
import {TextField} from 'material-ui';
import {SelectField, MenuItem} from 'material-ui';
import config from '../../appConfig';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';
import {RaisedButton} from 'material-ui';
import { connect } from 'react-redux';
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
		return(
			<div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
				<h1>Description</h1>
				<div style={{display:'flex', flexDirection:'column'}}>
					<p style={{textAlign:'center'}}>Tell us about yourself.</p>
					<SelectField errorText={this.props.ageErrorText} value={this.props.age} onChange={(event, index, value)=>this.props.ageEntered(value)} floatingLabelText='Age'>{this.renderMenuItems(config.age)}</SelectField>
					<div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', alignItems:'flex-start', width:'100%'}}>
						<SelectField errorText={this.props.feetErrorText} value={this.props.feet} onChange={(event, index, value)=>this.props.feetEntered(value)} style={{width:'35%'}} floatingLabelText='Feet'>{this.renderMenuItems(config.feet)}</SelectField>
						<SelectField errorText={this.props.inchesErrorText} value={this.props.inches} onChange={(event, index, value)=>this.props.inchesEntered(value)} style={{width:'35%'}} floatingLabelText='Inches'>{this.renderMenuItems(config.inches)}</SelectField>
					</div>
					<TextField value={this.props.weight}
						errorText={ this.props.weightErrorText || ''}
						onChange={(event)=>this.props.weightEntered(event)}
						floatingLabelText='Weight (lbs)'
					/>
				</div>
				<div style={{display:'flex', flexDirection:'row'}}>
					<RaisedButton  label="Previous Page" onClick={() => this.props.prevPage()} style={{margin:12}}></RaisedButton>
				{ (!this.props.errorText
 					&& !this.props.ageErrorText
					&& !this.props.inchesErrorText
					&& !this.props.feetErrorText)
					&&
						<RaisedButton primary={true}
							label={'Next Page'}
							onClick={() => this.props.changePage()}
							style={{margin:12}}>
						</RaisedButton>
				}
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
		ageErrorText: state.description.ageErrorText,
		inchesErrorText: state.description.inchesErrorText,
		feetErrorText: state.description.feetErrorText,
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
