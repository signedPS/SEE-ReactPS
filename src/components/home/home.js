import React from 'react';
import { Component } from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import names,{
  increment,
  decrement,
	firstNameEnter,
	lastNameEnter
} from '../names';

class Home extends Component{
	constructor(props){
		super(props);
	}

	render(){

		return(
			<div>
				<h1>Page 1</h1>
				<p>Count: {this.props.count}</p>

				<p><button onClick={this.props.increment} disabled={this.props.isIncrementing}>Increment</button></p>

				<p><button onClick={this.props.decrement} disabled={this.props.isDecrementing}>Decrementing</button></p>

    		<p><button onClick={() => this.props.changePage()}>Redux Page Change</button></p>
				<div style={{display:'flex', flexDirection:'column'}}>
					<input value={this.props.firstName} onChange={(e) => this.props.firstNameEnter(e)}/>
					<input value={this.props.lastName} onChange={(e) => this.props.lastNameEnter(e)}/>
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
)(Home)
