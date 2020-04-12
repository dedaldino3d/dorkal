import React from 'react'
import Container from './styles'
import { Link, Switch, Route } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai'
import { FaBell, FaUserShield, FaUserEdit, FaRegEnvelope, FaLock, FaSignOutAlt } from 'react-icons/fa'
import { MdMessage } from 'react-icons/md'
import { FiBell, FiSettings } from 'react-icons/fi'
import { GoShield } from 'react-icons/go'
import Header from '../Header/presenter'


export const Settings = (props) => {

    return (
        <>
        <Header/>
        <Container>
            {/* change components */}
            <div>
                <div>
                    <h1><FaUserShield/> User settings</h1>
                    <div>
                        <Link to="#"><MdMessage/><span>Messages</span></Link>
                    </div>
                    <div>
                        <Link to="#"><FaBell/><span>Notifications</span></Link>
                    </div>
                    <div>
                        <Link to="#"><FaUserEdit/><span>Change Username</span></Link>
                    </div>
                    <div>
                        <Link to="#"><FaRegEnvelope/><span>Change Email</span></Link>
                    </div>
                    <div>
                        <Link to="#"><FaLock/><span>Change Password</span></Link>
                    </div>
                </div>
                <div>
                    <Link to="#"><GoShield/><span>Security</span></Link>
                </div>
                <div>
                    <Link to="#"><FaLock/><span>Terms of services</span></Link>
                </div>
                <div>
                    <Link to="#"><FaLock/><span>Policies of Privacy</span></Link>
                </div>
                <div>
                    <Link to="#"><FaSignOutAlt/><span>Logout</span></Link>
                </div>
            </div>
            {/* Show components */}
            <div>
            </div>
        </Container>
        </>
    )
}



export default Settings