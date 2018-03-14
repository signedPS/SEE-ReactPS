import React from 'react';
import { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import {RaisedButton} from 'material-ui';
import {Paper} from 'material-ui';
import {Store} from '../../store';
import config from '../../appConfig';
import {pageContainer,
	fieldContainers,
	titleSubtextStyle,
	pageButtonStyling,
	finalPageErrorTextStyle,
	postDataButtonStyle,
	paperContainerStyle} from '../componentStyles';

class FinishPage extends Component{
	constructor(props){
		super(props);

		this.fetchFromStore = this.fetchFromStore.bind(this);
		this.putData = this.putData.bind(this);
		this.invalidCheck = this.invalidCheck.bind(this);
	}

	putData(dataObj){
		console.log(dataObj);
		fetch('http://localhost:3000/posts', {
			method: 'POST', // or 'PUT and specify post ID e.g. http://localhost:3000/posts/1'
			body: JSON.stringify(dataObj),
			headers: new Headers({
				'Content-Type': 'application/json'
			})
		}).then(res => res.json())
		.then(response => {console.log('Success:', response)
			alert('Successfully Posted!');
		})
		.catch(error => {console.error('Error:', error)
			alert('Error Posting:', error)
		});
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

	invalidCheck(obj){
		//checking to see if there are any active validation errors
		let checkObj = obj;
		let invalid = false
		Object.keys(checkObj).map((keys) => {
			let subObj = checkObj[keys];
			console.log(subObj);
			Object.keys(subObj).map((subKeys)=>{
				if(subKeys == 'validationError' && subObj[subKeys] === true){
					invalid = true
					return;
				}
			});
		});
		return invalid;
	}

	render(){
		return(
			<Paper style={paperContainerStyle} zDepth={5}>
				<div style={pageContainer}>
					<h1>Almost done, just submit your data!</h1>
					<p style={titleSubtextStyle}>Thank you for participating.</p>
					<div style={fieldContainers}>
						<RaisedButton  label="Previous Page" onClick={() => this.props.prevPage()} style={pageButtonStyling}></RaisedButton>
						<RaisedButton disabled={(this.props.errorText || this.props.colorRequired) ? true : false}
							disabled={this.invalidCheck(this.fetchFromStore())}
							secondary={true}
							label={"Post Data"}
							onClick={() => this.putData(this.fetchFromStore())}
							style={postDataButtonStyle}
						/>
						{
							this.invalidCheck(this.fetchFromStore()) ?
							<div style={finalPageErrorTextStyle}>Invalid form, missing data!</div> :
		 					''
						}
					</div>
				</div>
			</Paper>
		);
	}
}

const mapStateToProps = (state) => ({
		email: state.emailAddress.email,
		errorText: state.emailAddress.errorText
});

const mapDispatchToProps = dispatch => bindActionCreators({
	prevPage: () => push('/page-four'),
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FinishPage)
