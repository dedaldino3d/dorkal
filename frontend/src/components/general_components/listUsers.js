import React from 'react'
import styled from 'styled-components';
import Avatar from '../Avatar'


export const Container = styled.ul`
    padding: 8px;
    display: flex;
    justify-content: flex-start;

    & li {
        margin-left: 3px;

    }
`;

export const ListUsers = props => {
    return(
        <Container>
            <li>
                <Avatar
                tam={props.tam}
                alt="Deni profile_image"
                source={require('../../images/noPhoto.jpg')}
                />
            </li>
            <li>
                <Avatar
                tam={props.tam}
                alt="Deni profile_image"
                source={require('../../images/noPhoto.jpg')}
                />
            </li>
            <li>
                <Avatar
                tam={props.tam}
                alt="Deni profile_image"
                source={require('../../images/noPhoto.jpg')}
                />
            </li>
        </Container>
    )
}

export default ListUsers
