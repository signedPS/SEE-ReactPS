import React from 'react';
import { Component } from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {TextField} from 'material-ui';
import {RaisedButton} from 'material-ui';

import names,{
  increment,
  decrement,
	firstNameEnter,
	lastNameEnter
} from './namesRedux';

class Names extends Component{
	constructor(props){
		super(props);
	}

	render(){

		return(
			<div>
				<h1>Page 1</h1>
				<p>Count: {this.props.count}</p>
				<div style={{display:'flex', flexDirection:'column', alignItems:'left'}}>
					<RaisedButton label="Increment" onClick={this.props.increment} disabled={this.props.isIncrementing} style={{margin:12}}></RaisedButton>
					<RaisedButton label="Decrement" onClick={this.props.decrement} disabled={this.props.isDecrementing} style={{margin:12}}></RaisedButton>
					<RaisedButton label="Redux Page Change" onClick={() => this.props.changePage()} style={{margin:12}}></RaisedButton>
					<TextField id='firstName'
 						hintText='Enter First Name'
						floatingLabelText='First Name'
						value={this.props.firstName}
						onChange={(e) => this.props.firstNameEnter(e)}
					/>
					<TextField id='lastName'
						hintText='Enter Last Name'
						floatingLabelText='Last Name'
						value={this.props.lastName}
						onChange={(e) => this.props.lastNameEnter(e)}
					/>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	count: state.names.count,
	isIncrementing: state.names.isIncrementing,
	isDecrementing: state.names.isDecrementing,
	firstName: state.names.firstName,
	lastName: state.names.lastName
});

const mapDispatchToProps = dispatch => bindActionCreators({
	increment,
  decrement,
  changePage: () => push('/page-two'),
	firstNameEnter: (e) => dispatch(firstNameEnter(e.target.value)),
	lastNameEnter: (e) => dispatch(lastNameEnter(e.target.value))
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Names)
