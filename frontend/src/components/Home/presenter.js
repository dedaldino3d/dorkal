import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch, Link, useRouteMatch } from 'react-router-dom';


import { Container, InfoHome, TheBest, Header, HomeHeader } from './styles';
import Trending from '../Trending/presenter'
import Signup from '../Signup/presenter';
import Login from '../Login/index';
import Button from '../button'


export const Home = prop => {
	const { path } = useRouteMatch();

	const handleAuthClick = () => {
		let login = document.getElementById("modal-login");
		let sign = document.getElementById("modal-sign");
		let auth = document.getElementById("auth");
		let content = document.getElementById("modal-content");
		let close = document.getElementById("close");

		login.onclick = () => {
			auth.style.display = "block";
		}
		sign.onclick = () => {
			auth.style.display = "block";
		}
		close.onclick = () => {
			auth.style.display = "none";
		}

	}

	return (
		<Container>
			<HomeHeader>
				<div>
					<span>Logo e nome</span>
				</div>
				<div>
					<Link to={`${path}/login`}> 
						<Button outline bd_xs id="modal-login" type='' title='Login' onClick={handleAuthClick}/>
					</Link>
					<Link to={`${path}/signup`}>
						<Button outline bd_xs id="modal-sign" type='' title='Sign up' onClick={handleAuthClick}/>
					</Link>
				</div>
			</HomeHeader>
			<Header>
				<InfoHome>
					<div>
						<header>
							<h1>New Trends on Dorkal</h1>
							<p>Waiting for You</p>
						</header>
						<p>Find out yourself, review the bests jokes, loves and shares</p>
						<p>Inside Dorkal you find the best inside you share what you want to</p>
					</div>
				</InfoHome>
				<div id='auth'>
					<span id="close"> X </span>
					<div id="modal-content">
						<Switch>
							{/** Others components can go here, e.g. Login and Signup components */}
							<Route path={`${path}/login`} component={Login}/>
							<Route path={`${path}/signup`} component={Signup}/>
						</Switch>
					</div>
				</div>
			</Header>
			<TheBest>
				<div>
					<header>
						<h1>See the best trends</h1>
					</header>
					<Trending/>
				</div>
				<div>
					<header>
						<h1>More commented</h1>
					</header>
					<Trending/>
				</div>
			</TheBest>
			<div>
				<p>Dorkal was build for you and now we are 46272673 users</p>
				<p>Don't waste more time and go <strong>sign up</strong>, if you already have an account so, <strong>login</strong></p>
			</div>
		</Container>
	)
}


export default Home