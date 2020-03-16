import React, { Component } from 'react'
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
        login: PropTypes.func.isRequired
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
        const data = { 
            username, 
            password
        };
        event.preventDefault();
        login(username, password);
    };

    render(){
        const { username, password } = this.state;

        return(
            <LoginForm
                handleInputChange={this._handleInputChange}
                handleSubmit={this._handleSubmit}
                username={username}
                password={password}
            />
        );
    }
}

export default Login;