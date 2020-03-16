import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import Avatar from '../Avatar/avatar';

import { MdSend } from 'react-icons/md';

export const Container = styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    align-items: center;
    padding: .95em;
    max-width: 100%;
    box-shadow: 0 0 10px 0 rgba(75, 79, 92, 0.1);
    background-color: #6f1287;
    border: 1px solid rgb(56,68, 77);
    margin: 4px;
    border-radius: 3px;

    :hover {
        background-color: #ba1fe0;
        transition: background-color .3s ease-in-out 0s;
    }
`;

const Form = styled.form`
    display: flex;
    flex: 1 1 auto;
    height: 100%;

    input {
        flex: 2 1 auto;
        border: 1px solid rgb(56,68,77);
        border-radius: 20px;
        padding: 8px 12px;
        margin-right: 5px;
        margin-left: 5px;
    }
`;

const Button = styled.button`
    border: none;
    background-color: transparent;
    color: #fff;
    border-radius: 15px;
    border: 1px solid #fff;
    padding-left: 10px;
    padding-right: 10px;
    flex: 0 1 auto;
    transition: background-color .3s, color .3s ease-in-out 0s;
    :hover{
        color: #6f1287;
        background-color: #fff;
    }
`


export const AddPost = props => {

    return (
        <Container>
            <Avatar 
            // source={props.user.profile.profile_image || require('../../images/noPhoto.jpg')}
            source={require('../../images/noPhoto.jpg')}
            // alt={`${props.user.username}_profile_image`}
            alt="Dedaldino"
            width={38}
            height={38}
            />
            <Form>
                <input 
                type="text"
                placeholder={props.placeholder}
                name={`add${props.name}`}
                />
                <Button>Send</Button>
            </Form>
        </Container>
    )
}

AddPost.propTypes = {
    placeholder: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    buttonName: PropTypes.string.isRequired,
    user: PropTypes.shape({
        username: PropTypes.string.isRequired,
        profile: PropTypes.shape({
            profile_image: PropTypes.string
        })
    })
}

export default AddPost
