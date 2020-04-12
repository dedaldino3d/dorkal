import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import SignupForm from './presenter'



class Signup extends Component{

    state = {
        username: "",
        email: "",
        password1: "",
        password2: "",
    };

    static propTypes = {
        signup: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool,
        isLoading: PropTypes.bool.isRequired,
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
        if(this.props.isAuthenticated){
            return <Redirect to='/feed' />
        }
        const { username, email, password1, password2 } = this.state;

        return(
            <SignupForm
                username={username}
                email={email}
                password1={password1}
                password2={password2}
                isLoading={this.props.isLoading}
                handleInputChange={this._handleInputChange}
                handleSubmit={this._handleSubmit}
            />
        );
    }
}

export default Signup;