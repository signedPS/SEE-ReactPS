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
			<div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
				<h1>Favorite Color</h1>
				<p>
						Pick your favorite color! (or enter your own)
				</p>
				<div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
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
					<div style={{display:'flex', flexDirection:'row', marginTop: '20px'}}>
							<RaisedButton label="Previous Page"
								onClick={() => this.props.prevPage()}
							style={{margin:12}}>
							</RaisedButton>
							{(!this.props.errorText || this.props.colorRequired) &&
								<RaisedButton primary={true}
									label="Next Page" onClick={() => this.props.changePage()}
									style={{margin:12}}>
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
