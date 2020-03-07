import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LoginForm from './presenter'

export class Login extends Component{

    state = {
        username: "",
        password: ""
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