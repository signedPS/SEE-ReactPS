import React from 'react';
import { Component } from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {TextField} from 'material-ui';
import {RaisedButton} from 'material-ui';
import { firstNameEnter, lastNameEnter } from '../../redux/namesPage/names-page-actions';

import names from '../../redux/namesPage/names-page-reducer';

class NamesPage extends Component{
	constructor(props){
		super(props);
	}

	render(){

		return(
			<div className="page" style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
				<h1>Full Name</h1>
				<div style={{display:'flex', flexDirection:'column'}}>
					<p style={{textAlign:'center'}}>Please enter your name</p>
					<TextField id='firstName'
						errorText={this.props.errorTextFN}
 						hintText='Enter First Name'
						floatingLabelText='First Name'
						value={this.props.firstName}
						onChange={(e) => this.props.firstNameEnter(e)}
					/>
					<TextField id='lastName'
						errorText={this.props.errorTextLN}
						hintText='Enter Last Name'
						floatingLabelText='Last Name'
						value={this.props.lastName}
						onChange={(e) => this.props.lastNameEnter(e)}
					/>
				</div>
				{ (!this.props.errorTextLN && !this.props.errorTextFN) &&
					<RaisedButton primary={true} label="Next Page" onClick={() => this.props.changePage()} style={{margin:12}}></RaisedButton>
				}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	firstName: state.names.firstName,
	lastName: state.names.lastName,
	errorTextFN: state.names.errorTextFN,
	errorTextLN: state.names.errorTextLN
});

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/page-two'),
	firstNameEnter: (e) => dispatch(firstNameEnter(e.target.value)),
	lastNameEnter: (e) => dispatch(lastNameEnter(e.target.value))
}, dispatch);



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NamesPage)
