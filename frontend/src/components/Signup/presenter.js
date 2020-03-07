import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Container from './styles';


export const SignupForm = (props) => (
    <Container>
        <header>
            <h3>Dorkal</h3>
        </header>

        <div>
            <img src="#"/>
            <div>
                <form 
                onSubmit={props.handleSubmit}
                method="POST"
                >
                    <input 
                    type="text" 
                    placeholder="Username"
                    name="username"
                    onChange={props.handleInputChange}
                    value={props.username}
                    autoFocus='true'
                    required='true'
                    />
                    <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    onChange={props.handleInputChange}
                    value={props.email}
                    required="true"
                    />
                    <input
                    type="password" 
                    placeholder="Password"
                    name="password1"
                    onChange={props.handleInputChange}
                    value={props.password1}
                    required='true'
                    />
                    <input
                    type="password"  
                    placeholder="Confirm Password"
                    name="password2"
                    onChange={props.handleInputChange}
                    value={props.password2}
                    required='true'
                    />
                    <button
                    type="submit">Sign up</button>
                </form>
                <p>Already have an account?</p>
                <p>
                    <a href="#">Login</a> or login with 
                    <a href="#"> <strong>Facebook</strong></a>,
                    <a href=""> <strong>Twitter</strong></a>
                    or <a href="#"> <strong>Google</strong></a>
                </p>
            </div>
        </div>
    </Container>
);

SignupForm.propTypes = {
    handleInputChange: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password1: PropTypes.string.isRequired,
    password2: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func.isRequired
};


export default SignupForm;
