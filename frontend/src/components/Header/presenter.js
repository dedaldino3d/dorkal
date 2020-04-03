import React from 'react'
// import PropTypes from 'prop-types'
import { AiOutlineHome } from 'react-icons/ai'
import { FaRegUser } from 'react-icons/fa'
import { MdMessage } from 'react-icons/md'
import { FiBell, FiSettings } from 'react-icons/fi'
import Container from  './styles'
import { Link } from 'react-router-dom'


const Header = props => {
    return (
        <Container>
            <div>
                <Link to="/feed"><AiOutlineHome/></Link>
            </div>
            <div>
                <Link to="/profile"><FaRegUser/></Link>
            </div>
            <div>
                <Link to="#"><MdMessage/></Link>
            </div>
            <div>
                <Link to="#"><FiBell/></Link>
            </div>
            <div>
                <Link to="#"><FiSettings/></Link>
            </div>
            
        </Container>
    )
}


export default Header
