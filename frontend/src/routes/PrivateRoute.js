import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';



export const PrivateRoute = ({component: Component, isAuthenticated, ...rest}) => (
	<Route
		{...rest}
		render={props => (
			isAuthenticated ? (
				<Component {...props} />
				):
				(
				<Redirect to={{ pathname: "/login" }} />
				)
		)}
	/>
)




const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated
})


export default connect(mapStateToProps)(PrivateRoute);