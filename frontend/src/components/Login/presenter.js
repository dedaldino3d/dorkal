import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Container, { Form, Social, SocialButton } from './styles';
import { FaFacebookF, FaGooglePlusG, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';



export const LoginForm = props => (
    <Container>
        <h1>Login</h1>
        <Social>
            <SocialButton><FaFacebookF/></SocialButton>
            <SocialButton><FaGooglePlusG/></SocialButton>
            <SocialButton><FaTwitter/></SocialButton>
        </Social>
        <p>or use your account for login</p>
        <div>
            <Form 
            onSubmit={props.handleSubmit}
            method="POST"
            >
                <input 
                type="text" 
                placeholder="Username or Email"
                name="username"
                onChange={props.handleInputChange}
                value={props.username}
                required={true}
                />
                <p><a href="#">Forgot your password?</a></p>
                <input
                type="password" 
                name="password" 
                placeholder="Password"
                name="password"
                onChange={props.handleInputChange}
                value={props.password}
                required={true}
                />
                {props.isLoading ? <span>Loading...</span>: 
                <button type="submit">Login</button>}
            </Form>
            <p>Don't have an account? <Link to='/signup' >Sign up</Link></p>
            <p>Clicking in <i>'Sign up on Dorkal'</i> you agree with our <Link to="#">terms and privacy policy</Link></p>
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
