import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Container, { Form, Social, SocialButton } from './styles';
import { FaFacebookF, FaGooglePlusG, FaTwitter } from 'react-icons/fa';
import { Link, useRouteMatch } from 'react-router-dom';


export const SignupForm = (props) => {
    const { path } = useRouteMatch();

    return (
    <Container>
        <h1>Sign up</h1>
        <Social>
            <SocialButton><FaFacebookF/></SocialButton>
            <SocialButton><FaGooglePlusG/></SocialButton>
            <SocialButton><FaTwitter/></SocialButton>
        </Social>
        <p>or use your email for registration</p>
        <div>
            <Form 
            onSubmit={props.handleSubmit}
            method="POST"
            >
                <input 
                type="text" 
                placeholder="Username"
                name="username"
                onChange={props.handleInputChange}
                value={props.username}                
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
                {props.isLoading ? <span>Loading...</span>: 
                <button type="submit">Sign up on Dorkal</button>}
            </Form>
            <p>Already have an account? <Link to={`${path}/login`}>Login</Link></p>
            <p>Clicking in <i>'Sign up on Dorkal'</i> you agree with our <a href="#">terms and privacy policy</a></p>
        </div>
    </Container>
)
};

SignupForm.propTypes = {
    handleInputChange: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password1: PropTypes.string.isRequired,
    password2: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func.isRequired
};


export default SignupForm;
