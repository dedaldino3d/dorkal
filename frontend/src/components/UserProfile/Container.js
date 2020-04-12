import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import UserProfileForm from './presenter'


export class UserProfile extends PureComponent {

    state = {
        isLoading: true,
    }

    static propTypes ={
        getProfile: PropTypes.func.isRequired,
    }

    static getDerivedStateFromProps(props, state){
        if(props.user){
            return {
                isLoading: false
            }
        }
    }

    componentDidMount(){
        if(!this.props.user){
            const { getProfile } = this.props;
            getProfile("dedaldino");
        }else{
            this.setState({
            isLoading: false
        })}
    }


    render() {
        if(this.state.isLoading){
            return <h1 style={{margin: "0 auto"}}>Loading profile page</h1>
        }else{
            return <UserProfileForm {...this.props} />
        }
    }
}


export default UserProfile
