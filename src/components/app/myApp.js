import React from 'react';
import {Component} from 'react';
import { Route, Link } from 'react-router-dom';
import NamesPage from '../namesPage/namesPage';
import EmailPage from '../emailPage/emailPage';
import DescriptionPage from '../descriptionPage/descriptionPage';
import ColorPage from '../colorPage/colorPage';
import PageFive from '../pageFive/pageFive';
import {RaisedButton} from 'material-ui';
import { push, replace } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import appPageRedux from './appPageRedux';
import { AnimatedRoute } from 'react-router-transition';

class MyApp extends Component {
	constructor(props) {
		super(props);
	}

	render(){

		return(
				<div  style={{display: 'flex', flexDirection: 'column'}}>
				<header>
					<div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'center', width:'100%'}}>
						<Link style={{textDecoration: 'none', color: 'black', fontFamily: '14px', marginLeft:'10px', marginRight:'10px'}} to='/'>
							<RaisedButton>Name</RaisedButton>
						</Link>
		        <Link style={{textDecoration: 'none', color: 'black', fontFamily: '14px', marginLeft:'10px', marginRight:'10px'}} to='/page-two'>
		            <RaisedButton>Email</RaisedButton>
		        </Link>
						<Link style={{textDecoration: 'none', color: 'black', fontFamily: '14px', marginLeft:'10px', marginRight:'10px'}} to='/page-three'>
		          <RaisedButton>Description</RaisedButton>
						</Link>
						<Link style={{textDecoration: 'none', color: 'black', fontFamily: '14px', marginLeft:'10px', marginRight:'10px'}} to='/page-four'>
		        	<RaisedButton>Color</RaisedButton>
						</Link>
						<RaisedButton>Page Five</RaisedButton>

					</div>
    		</header>
				<main>
						<div style={{display:'flex', flexDirection:'column'}}>
							<AnimatedRoute
								exact path="/page-four"
								component={ColorPage}
								atEnter={{ offset: 300 }}
								atLeave={{ offset: 0 }}
								atActive={{ offset: 0 }}
								mapStyles={(styles) => ({
									transform: `translateX(${styles.offset}%)`,
								})}
							/>
							<AnimatedRoute
								exact path="/page-three"
								component={DescriptionPage}
								atEnter={{ offset: 300 }}
								atLeave={{ offset: 0 }}
								atActive={{ offset: 0 }}
								mapStyles={(styles) => ({
									transform: `translateX(${styles.offset}%)`,
								})}
							/>
							<AnimatedRoute
								exact path="/page-two"
								component={EmailPage}
								atEnter={{ offset: 300 }}
								atLeave={{ offset: 0 }}
								atActive={{ offset: 0 }}
								mapStyles={(styles) => ({
									transform: `translateX(${styles.offset}%)`,
								})}
							/>
							<AnimatedRoute
								exact path="/"
								component={NamesPage}
								atEnter={{ offset: 300 }}
								atLeave={{ offset: 0 }}
								atActive={{ offset: 0 }}
								mapStyles={(styles) => ({
									transform: `translateX(${styles.offset}%)`,
								})}
							/>
						</div>
      			<Route exact path='/page-five' component={PageFive} />
    		</main>
			</div>
		)
	}
}

export default MyApp
