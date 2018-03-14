import React from 'react';
import { Component } from 'react';
import {TextField} from 'material-ui';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import emailAddress, {emailEntered} from './emailRedux';
import {RaisedButton} from 'material-ui';

class EmailPage extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
				<h1>Email Address</h1>
				<div style={{display:'flex', flexDirection:'column'}}>
				<p style={{textAlign:'center'}}>Please enter a valid email address</p>
					<TextField id={'firstName'}
						errorText={ this.props.errorText || ''}
						hintText={'Enter Valid Email'}
						floatingLabelText={'Email'}
						value={this.props.email || ''}
						onChange={(e) => this.props.emailEntered(e)}
					/>
				</div>
				<div style={{display:'flex', flexDirection:'row'}}>
					<RaisedButton  label="Previous Page" onClick={() => this.props.prevPage()} style={{margin:12}}></RaisedButton>
				{ (!this.props.errorText) &&

						<RaisedButton  label="Next Page" onClick={() => this.props.changePage()} style={{margin:12}}></RaisedButton>

				}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
		email: state.emailAddress.email,
		errorText: state.emailAddress.errorText
});

const mapDispatchToProps = dispatch => bindActionCreators({
	prevPage: () => push('/#/'),
	changePage: () => push('/page-three'),
	emailEntered: (e) => dispatch(emailEntered(e.target.value))
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmailPage)
