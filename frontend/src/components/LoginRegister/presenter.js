import React from 'react'
import Login from '../Login/presenter'
import Signup from '../Signup/presenter'
import styled from 'styled-components'








export const LoginRegister = props => {

	handleClick = () => {
		
	}

	return (
		<div class="container" id="container">
		    <div class="form-container sign-up-container">
		        <!-- Sign Up form code goes here -->
		        <Signup/>
		    </div>
		    <div class="form-container sign-in-container">
		        <!-- Sign In form code goes here -->
		        <Login/>
		    </div>
		    <div class="overlay-container">
		        <!-- The overlay code goes here -->
		        <div class="overlay-container">
				    <div class="overlay">
				        <div class="overlay-panel overlay-left">
				            <h1>Welcome Back!</h1>
				            <p>
				                To keep connected with us please login with your personal info
				            </p>
				            <button class="ghost" id="signIn">Sign In</button>
				        </div>
				        <div class="overlay-panel overlay-right">
				            <h1>Hello, Friend!</h1>
				            <p>Enter your personal details and start journey with us</p>
				            <button class="ghost" id="signUp">Sign Up</button>
				        </div>
				    </div>
				</div>
		    </div>
		</div>
	)
}