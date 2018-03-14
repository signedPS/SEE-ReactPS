import React from 'react';
import { Component } from 'react';
import {TextField} from 'material-ui';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import emailAddress from '../../redux/emailPage/email-page-reducer';
import { emailEntered } from '../../redux/emailPage/email-page-actions';
import {RaisedButton} from 'material-ui';
import {Paper} from 'material-ui';
import {pageContainer,
	paginationContainer,
	pageButtonStyling,
	fieldContainers,
	titleSubtextStyle,
	paperContainerStyle} from '../componentStyles';

class EmailPage extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<Paper style={paperContainerStyle} zDepth={ !this.props.validationError ? 2 : 0}>
				<div style={pageContainer}>
					<h1>Email Address</h1>
					<div style={fieldContainers}>
					<p style={titleSubtextStyle}>Please enter a valid email address</p>
						<TextField id={'firstName'}
							errorText={ this.props.errorText || ''}
							hintText={'Enter Valid Email'}
							floatingLabelText={'Email'}
							value={this.props.email || ''}
							onChange={(e) => this.props.emailEntered(e)}
						/>
					</div>
					<div style={paginationContainer}>
						<RaisedButton
							label={'Previous Page'}
							onClick={() => this.props.prevPage()}
							style={pageButtonStyling}
						/>
						{(!this.props.validationError) &&
							<RaisedButton primary={true}
								label={'Next Page'}
								onClick={() => this.props.changePage()}
								style={pageButtonStyling}
							/>

						}
					</div>
				</div>
			</Paper>
		);
	}
}

const mapStateToProps = (state) => ({
		email: state.emailAddress.email,
		errorText: state.emailAddress.errorText,
		validationError: state.emailAddress.validationError
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
