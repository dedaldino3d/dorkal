import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import Avatar from './avatar';

import { MdSend } from 'react-icons/md';

export const Container = styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    align-items: center;
    padding: .95em;
    max-width: 100%;
    
    background-color: #f9f9f9;
    border: 1px solid #e2e2e2;
`;

const Form = styled.form`
    display: flex;
    flex: 1 1 auto;
    height: 100%;
    input {
        flex: 1 1 auto;
        border: 1px solid #ddd;
        border-radius: 20px;
        padding: 8px 12px;
        margin-right: 5px;
        margin-left: 5px;
        overflow: visible;
    }

    button {
        border: none;
        background-color: #3385ff;
        border-radius: 15px;
        padding: 10px 15px ;
        color: #fff;
    }
`;

export const AddPost = props => {

    return (
        <Container>
            <Avatar 
            source={props.user.profile.profile_image || require('images/noPhoto.jpg')}
            alt={`${props.user.username}_profile_image`}
            width={38}
            height={38}
            />
            <Form>
                <input 
                type="text"
                placeholder={props.placeholder}
                name={`add${props.name}`}
                />
                <button
                type="submit"
                ><MdSend/></button>
            </Form>
        </Container>
    )
}

AddPost.propTypes = {
    placeholder: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    buttonName: PropTypes.string.isRequired,
    user: PropTypes.shape({
        username: PropTypes.string.isRequires,
        profile: PropTypes.shape({
            profile_image: PropTypes.string
        })
    })
}

export default AddPost
