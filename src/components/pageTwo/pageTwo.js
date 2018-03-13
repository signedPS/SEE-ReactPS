import React from 'react';
import { Component } from 'react';
import {TextField} from 'material-ui';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import emailAddress, {emailEntered, emailValidation} from './emailRedux';

class PageTwo extends Component{
	constructor(props){
		super(props);
	}

	render(){
		console.log(this.props.errorText);
		return(
			<div>
				<h1>Page Two</h1>
				<p> Valid Email Address</p>
					<TextField id='firstName'
						hintText={'Enter Valid Email'}
						floatingLabelText={'Email'}
						value={this.props.email || ''}
						onChange={(e) => this.props.emailEntered(e)}
						onBlur={(e) => this.props.emailValidation(e)}
						errorText={ this.props.errorText || ''}
					/>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
		email: state.emailAddress.email,
		errorText: state.emailAddress.errorText
});

const mapDispatchToProps = dispatch => bindActionCreators({
	emailEntered: (e) => dispatch(emailEntered(e.target.value)),
	emailValidation: (e) => dispatch(emailValidation(e.target.value))
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageTwo)
