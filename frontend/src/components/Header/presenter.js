import React from 'react'
// import PropTypes from 'prop-types'
import { AiOutlineHome } from 'react-icons/ai'
import { FaUserAlt, FaBell } from 'react-icons/fa'
import { MdMessage } from 'react-icons/md'
import { IoMdHome, IoMdSettings } from 'react-icons/io'
import { FiSettings } from 'react-icons/fi'
import Container from  './styles'
import { Link } from 'react-router-dom'


const Header = props => {
    return (
        <Container>
            <div>
                <Link to="/feed"><IoMdHome/></Link>
            </div>
            <div>
                <Link to="/profile"><FaUserAlt/></Link>
            </div>
            <div>
                <Link to="/messages"><MdMessage/></Link>
            </div>
            <div>
                <Link to="/notifications"><FaBell/></Link>
            </div>
            <div>
                <Link to="/settings"><IoMdSettings/></Link>
            </div>
            
        </Container>
    )
}


export default Header
