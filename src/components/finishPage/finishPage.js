import React from 'react';
import { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import {RaisedButton} from 'material-ui';
import {Store} from '../../store';
import config from '../../appConfig';

class FinishPage extends Component{
	constructor(props){
		super(props);

		this.fetchFromStore = this.fetchFromStore.bind(this);
		this.putData = this.putData.bind(this);
		this.invalidCheck = this.invalidCheck.bind(this);
	}

	putData(dataObj){
		fetch('http://localhost:3000/posts/1', {
			method: 'PUT', // or 'PUT'
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
			<div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
				<h1>Finish! You Made it.</h1>
				<div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'center', width:'100%'}}>
				<p>
					Thank you for participating.
				</p>
			</div>
			<div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
				<RaisedButton  label="Previous Page" onClick={() => this.props.prevPage()} style={{margin:12}}></RaisedButton>
				<RaisedButton disabled={(this.props.errorText || this.props.colorRequired) ? true : false}
					disabled={this.invalidCheck(this.fetchFromStore())}
					secondary={true}
					label={"Post Data"}
					onClick={() => this.putData(this.fetchFromStore())}
					style={{marginTop: '30px'}}
				/>
				{this.invalidCheck(this.fetchFromStore()) ? <div style={{color: 'red', marginTop: '30px', fontSize:'2em'}}>Invalid form, missing data!</div> : ''}
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
	prevPage: () => push('/page-four'),
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FinishPage)
