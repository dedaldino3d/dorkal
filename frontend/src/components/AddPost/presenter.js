import React from 'react'
import Avatar from '../Avatar';
import PropTypes from 'prop-types'
import Container, { Form, Button } from './styles'


export const AddPost = props => {
    if(props.isLoading){
        return <h3>Loading addpost... </h3>
    }else{
        return <RenderAddPost {...props}/>
    }
}

const RenderAddPost = props => (
    <Container>
        <Avatar 
        source={/*props.user.profile.profile_image || */require('../../images/noPhoto.jpg')}
        alt={/*props.user.username*/'dedaldino'}
        tam={65}
        />
        <Form method="POST">
            <textarea 
            type="text"
            placeholder="You thinking about..."
            name="addpost"
            value={props.content}
            onChange={props.handleInputChange}
            />
            <Button type="submit" onSubmit={props.handleSubmit}>Send</Button>
        </Form>
    </Container>
)

AddPost.defaultProps = {
    user: PropTypes.shape({
        username: "'dedaldino"
    })
}

AddPost.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string.isRequired,
        profile: PropTypes.shape({
	        profile_image: PropTypes.string
	    })
    }).isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    content: PropTypes.string.isRequired
}


export default AddPost
