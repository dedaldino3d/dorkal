import React, { Component } from 'react'
import PropTypes from 'prop-types'

import UserInfoPresenter from './presenter'


export class UserInfo extends Component {

   state = {
        isLoading: false,
        edit: false,
        first_name: "",
        last_name: "",
        DOB: "",
        gender: "",
        occupation: "",
        about: "",
        location: "",
   }

   static propTypes ={
        updateProfile: PropTypes.func.isRequired
   }

    handleEditClick = () => {
        this.setState({
            edit: !this.state.edit
        })
    }

    handleChange = event => {
        const {target: { name, value}} = event;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        const { updateProfile } = this.props;
        const {first_name, last_name, DOB, gender, occupation, about, location } = this.state;
        const data = {first_name, last_name, DOB, gender, occupation, about, location};
        updateProfile(data);
    }

    render() {
        return (
            <UserInfoPresenter {...this.props} {...this.state} />
        )
    }
}


 export default UserInfo
