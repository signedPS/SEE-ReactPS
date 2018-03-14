import React from 'react';
import {Component} from 'react';
import { Route, Link } from 'react-router-dom';
import NamesPage from '../namesPage/namesPage';
import EmailPage from '../emailPage/emailPage';
import DescriptionPage from '../descriptionPage/descriptionPage';
import ColorPage from '../colorPage/colorPage';
import FinishPage from '../finishPage/finishPage';
import {RaisedButton} from 'material-ui';
import { AnimatedRoute } from 'react-router-transition';
import {pageContainer, fieldContainers, linkStyle} from '../componentStyles';

class MyApp extends Component {
	constructor(props) {
		super(props);
	}

	render(){

		const includeToolbar = false;

		return(
				<div  style={pageContainer}>
				{includeToolbar && <header>
						<Link style={linkStyle} to='/'>
							<RaisedButton>Name</RaisedButton>
						</Link>
		        <Link style={linkStyle} to='/page-two'>
		            <RaisedButton>Email</RaisedButton>
		        </Link>
						<Link style={linkStyle} to='/page-three'>
		          <RaisedButton>Description</RaisedButton>
						</Link>
						<Link style={linkStyle} to='/page-four'>
		        	<RaisedButton>Color</RaisedButton>
						</Link>
						<Link style={linkStyle} to='/page-five'>
		        	<RaisedButton>Finish Page</RaisedButton>
						</Link>
    		</header>}
				<main>
						<div style={fieldContainers}>
							<AnimatedRoute
								exact path="/page-five"
								component={FinishPage}
								atEnter={{ offset: 500 }}
								atLeave={{ offset: 0 }}
								atActive={{ offset: 0 }}
								mapStyles={(styles) => ({
									transform: `translateX(${styles.offset}%)`,
								})}
							/>
							<AnimatedRoute
								exact path="/page-four"
								component={ColorPage}
								atEnter={{ offset: 500 }}
								atLeave={{ offset: 0 }}
								atActive={{ offset: 0 }}
								mapStyles={(styles) => ({
									transform: `translateX(${styles.offset}%)`,
								})}
							/>
							<AnimatedRoute
								exact path="/page-three"
								component={DescriptionPage}
								atEnter={{ offset: -500 }}
								atLeave={{ offset: 0 }}
								atActive={{ offset: 0 }}
								mapStyles={(styles) => ({
									transform: `translateX(${styles.offset}%)`,
								})}
							/>
							<AnimatedRoute
								exact path="/page-two"
								component={EmailPage}
								atEnter={{ offset: 500 }}
								atLeave={{ offset: 0 }}
								atActive={{ offset: 0 }}
								mapStyles={(styles) => ({
									transform: `translateX(${styles.offset}%)`,
								})}
							/>
							<AnimatedRoute
								exact path="/"
								component={NamesPage}
								atEnter={{ offset: -500 }}
								atLeave={{ offset: 0 }}
								atActive={{ offset: 0 }}
								mapStyles={(styles) => ({
									transform: `translateX(${styles.offset}%)`,
								})}
							/>
						</div>
    		</main>
			</div>
		)
	}
}

export default MyApp
