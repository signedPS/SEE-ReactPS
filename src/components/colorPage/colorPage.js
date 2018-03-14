import React from 'react';
import { Component } from 'react';
import {SelectField, MenuItem} from 'material-ui';
import {TextField} from 'material-ui';
import config from '../../appConfig';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {RaisedButton} from 'material-ui';
import { push } from 'react-router-redux';
import color from '../../redux/colorPage/color-page-reducer';
import { colorEntered, colorTyped } from '../../redux/colorPage/color-page-actions';
import { pageContainer,
	paginationContainer,
	fieldContainers,
	titleSubtextStyle,
	pageButtonStyling} from '../componentStyles';

class ColorPage extends Component{
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
			<div style={pageContainer}>
				<h1 style={this.props.colorValue === 'Other' ? {color:'black'} : {color:this.props.colorValue}}>Favorite Color</h1>
				<p style={titleSubtextStyle}>Pick your favorite color! (or enter your own)</p>
				<div style={fieldContainers}>
					<SelectField floatingLabelText={'Favorite Color'}
						errorText={this.props.colorRequired}
						value={this.props.colorValue}
						onChange={(event, index, value)=>this.props.colorEntered(value)}
					>
						{this.renderMenuItems(config.colors)}
					</SelectField>
						{this.props.other &&
							<TextField floatingLabelText={'Enter other color'}
								errorText={this.props.errorText}
								value={this.props.colorText}
								onChange={(e) => this.props.colorTyped(e)}
							/>
						}
					<div style={paginationContainer}>
							<RaisedButton label="Previous Page"
								onClick={() => this.props.prevPage()}
							style={pageButtonStyling}>
							</RaisedButton>
							{(!this.props.errorText && !this.props.colorRequired) &&
								<RaisedButton primary={true}
									label="Next Page" onClick={() => this.props.changePage()}
									style={pageButtonStyling}>
								</RaisedButton>
							}
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
		colorValue: state.color.colorValue,
		colorText: state.color.colorText,
		errorText: state.color.errorMessage,
		colorRequired: state.color.colorRequired,
		other: state.color.other
});

const mapDispatchToProps = dispatch => bindActionCreators({
	prevPage: () => push('/page-three'),
	changePage: () => push('/page-five'),
	colorEntered: (value) => dispatch(colorEntered(value)),
	colorTyped: (e) => dispatch(colorTyped(e.target.value))
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ColorPage)
