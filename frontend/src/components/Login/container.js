import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import LoginForm from './presenter'

export class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            username: "",
            password: ""
        }
    }
    

    static propTypes = {
        login: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool,
        isLoading: PropTypes.bool.isRequired,
    }

    _handleInputChange = event => {
        const { target: { value, name }} = event;
        this.setState({
            [name]: value
        });
    };


    _handleSubmit = event => {
        const { login } = this.props;
        const { username, password } = this.state;
        login(username, password);
        event.preventDefault();

    };

    render(){
        const { username, password } = this.state;

        if(this.props.isAuthenticated){
            return (<Redirect to='/feed' />)
        }else{
            return(
            <LoginForm
                handleInputChange={this._handleInputChange}
                handleSubmit={this._handleSubmit}
                isLoading={this.props.isLoading}
                username={username}
                password={password}
            />)
        }
    }
}

export default Login;