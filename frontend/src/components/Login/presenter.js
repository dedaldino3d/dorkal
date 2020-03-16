import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Container from './styles';


export const LoginForm = (props) => (
    <Container>
        <div>
            <img src="#"/>
            <div>
                <form 
                onSubmit={props.handleSubmit}
                method="POST"
                >
                    <input 
                    type="text" 
                    placeholder="Username or Email"
                    name="username"
                    onChange={props.handleInputChange}
                    value={props.username}
                    autoFocus='true'
                    required='true'
                    />
                    <p><a href="#">Forgot your password?</a></p>
                    <input
                    type="password" 
                    name="password" 
                    placeholder="Password"
                    name="password"
                    onChange={props.handleInputChange}
                    value={props.password}
                    required='true'
                    />
                    <button
                    type="submit">Login</button>
                </form>
                <p>Don't have an account?</p>
                <p>
                    <a href="#">Register</a> or login with 
                    <a href="#"> <strong>Facebook</strong></a>,
                    <a href=""> <strong>Twitter</strong></a>
                    or <a href="#"> <strong>Google</strong></a>
                </p>
            </div>
        </div>
    </Container>
);

LoginForm.propTypes = {
    handleInputChange: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func.isRequired
};


export default LoginForm;
