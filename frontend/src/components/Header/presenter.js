import React from 'react'
// import PropTypes from 'prop-types'
import { AiOutlineHome } from 'react-icons/ai'
import { FaRegUser } from 'react-icons/fa'
import { MdMessage } from 'react-icons/md'
import { FiBell, FiSettings } from 'react-icons/fi'
import Container from  './styles'


const Header = props => {
    return (
        <Container>
            <div>
                <a href="#"><AiOutlineHome/></a>
            </div>
            <div>
                <a href="#"><FaRegUser/></a>
            </div>
            <div>
                <a href="#"><MdMessage/></a>
            </div>
            <div>
                <a href="#"><FiBell/></a>
            </div>
            <div>
                <a href="#"><FiSettings/></a>
            </div>
        </Container>
    )
}

// Header.propTypes = {

// }

export default Header
