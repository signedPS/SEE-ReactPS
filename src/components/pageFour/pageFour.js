import React from 'react';
import { Component } from 'react';
import {SelectField, MenuItem} from 'material-ui';
import {TextField} from 'material-ui';
import config from '../../appConfig';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import color, {
	colorEntered,
} from './colorRedux';

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
		console.log(this.props.other);
		return(
			<div>
				<h1>Page Four</h1>
				<p>
						● Other (If this option is chosen, user must fill in a text box, this box
						is required only of “other” us chosen)
				</p>
				<div style={{display:'flex', flexDirection: 'column'}}>
					<SelectField floatingLabelText={'Favorite Color'}
						value={this.props.colorValue}
						onChange={(event, index, value)=>this.props.colorEntered(value)}
					>
						{this.renderMenuItems(config.colors)}
					</SelectField>
					{this.props.other &&
						<TextField floatingLabelText={'Enter other color'}/>
					}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
		colorValue: state.color.colorValue,
		other: state.color.other
});

const mapDispatchToProps = dispatch => bindActionCreators({
	colorEntered: (e) => dispatch(colorEntered(e))
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageFour)
