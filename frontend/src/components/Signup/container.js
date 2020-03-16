import React, { Component } from 'react';
import PropTypes from 'prop-types'

import SignupForm from './presenter'



class Signup extends Component{

    state = {
        username: "",
        email: "",
        passoword1: "",
        password2: "",
    };

    static propTypes = {
        signup: PropTypes.func.isRequired
    };

    _handleInputChange = event => {
        const { target: { value, name }} = event;
        this.setState({
            [name]: value
        });
    };
    
    _handleSubmit = event => {
        const { username, email, password1, password2 } = this.state;
        const data = {
            username, 
            email, 
            password1, 
            password2
        };
        const { signup } = this.props;
        event.preventDefault();
        signup(data);
    };

    render(){
        const { username, email, password1, password2 } = this.state;

        return(
            <SignupForm
                username={username}
                email={email}
                password1={password1}
                password2={password2}
                handleInputChange={this._handleInputChange}
                handleSubmit={this._handleSubmit}
            />
        );
    }
}

export default Signup;