import React from 'react';
import {Component} from 'react';
import { Route, Link } from 'react-router-dom';
import Names from '../names/names';
import PageTwo from '../pageTwo/pageTwo';
import PageThree from '../pageThree/pageThree';
import PageFour from '../pageFour/pageFour';
import PageFive from '../pageFive/pageFive';

class MyApp extends Component {
	constructor(props) {
		super(props);
	}

	render(){
		return(
			<div>
				<header>
					<div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
	      		<Link to='/'>Home</Link>
	      		<Link to='/page-two'>Page Two</Link>
	      		<Link to='/page-three'>Page Three</Link>
	      		<Link to='/page-four'>Page Four</Link>
	      		<Link to='/page-five'>Page Five</Link>
					</div>
    		</header>
				<main>
      			<Route exact path='/' component={Names} />
      			<Route exact path='/page-two' component={PageTwo} />
      			<Route exact path='/page-three' component={PageThree} />
      			<Route exact path='/page-four' component={PageFour} />
      			<Route exact path='/page-five' component={PageFive} />
    		</main>
			</div>
		)
	}
}

export default MyApp;
