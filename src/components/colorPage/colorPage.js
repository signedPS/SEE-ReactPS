import React from 'react';
import { Component } from 'react';
import {SelectField, MenuItem} from 'material-ui';
import {TextField} from 'material-ui';
import config from '../../appConfig';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {RaisedButton} from 'material-ui';
import { push } from 'react-router-redux';
import {Store} from '../../store';

import color, {
	colorEntered,
	colorTyped
} from './colorRedux';

class ColorPage extends Component{
	constructor(props){
		super(props);
		this.renderMenuItems= this.renderMenuItems.bind(this);
		this.fetchFromStore = this.fetchFromStore.bind(this);
		this.putData = this.putData.bind(this);
	}

	putData(dataObj){
		fetch('http://localhost:3000/posts/1', {
			method: 'PUT', // or 'PUT'
			body: JSON.stringify(dataObj),
			headers: new Headers({
				'Content-Type': 'application/json'
			})
		}).then(res => res.json())
		.catch(error => console.error('Error:', error))
		.then(response => console.log('Success:', response));
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

	fetchFromStore(){
		let items = Store.getState();
			let postObject = {};
			Object.keys(items).map((eachItem) => {
				if((config.criteria).indexOf(eachItem) !== -1){
					postObject[eachItem] = items[eachItem];
				}
			});
		return postObject;
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
					<div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
							<RaisedButton label="Previous Page"
								onClick={() => this.props.prevPage()}
							style={{marginTop: '30px'}}>
							</RaisedButton>

							<RaisedButton disabled={(this.props.errorText || this.props.colorRequired) ? true : false}
								primary={true}
								label={"Post Data"}
								onClick={() => this.putData(this.fetchFromStore())}
								style={{marginTop: '30px'}}
							/>
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
	colorEntered: (value) => dispatch(colorEntered(value)),
	colorTyped: (e) => dispatch(colorTyped(e.target.value))
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ColorPage)
