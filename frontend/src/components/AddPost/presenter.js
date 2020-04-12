import React, { useState } from 'react'
import Avatar from '../Avatar';
import PropTypes from 'prop-types'
import Container, { Card, Form, Footer, DivSvg, Header } from './styles'
import { IoMdImages } from 'react-icons/io'
import { MdGif } from 'react-icons/md'
import { FaGrinAlt } from 'react-icons/fa'


export const AddPost = props => {
    if(props.isLoading){
        return <h3 style={{color: "rgba(0,0,255,.3)"}}>Loading add post... </h3>
    }else{
        return <RenderAddPost {...props}/>
    }
}

const RenderAddPost = props => {

    if(!props.add){
        return (<Container>
            <Avatar 
            source={props.user.profile.profile_image || require('../../images/noPhoto.jpg')}
            alt={props.user.username}
            tam={50}
            />
            <input type='text' onClick={props.handleAdd} placeholder='Add new post'/>
        </Container>)
    }
    else {
        return (<CardAddPost {...props}/>)
    }
}

const CardAddPost = props => {

    return (
        <Card>
            <Header>
                <Avatar 
                source={props.user.profile.profile_image || require('../../images/noPhoto.jpg')}
                alt={props.user.username}
                tam={50}
                />
                <span>{props.user.profile.full_name}</span>
                <span>adicionando novo post...</span>
            </Header>
            <Form method="POST" onSubmit={props.handleSubmit}>
                <textarea 
                type="text"
                placeholder="You thinking about..."
                name="addpost"
                value={props.content}
                onChange={props.handleInputChange}
                />
                <DivSvg>
                    <IoMdImages/>
                    <MdGif/>
                    <FaGrinAlt/>
                </DivSvg>
                <Footer>
                    <div>
                        <span onClick={props.handleAdd}>Cancelar</span>
                        <button type='submit'>Publicar</button>
                    </div>
                </Footer>
            </Form>
            
        </Card>
    )
}


AddPost.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string.isRequired,
        profile: PropTypes.shape({
	        profile_image: PropTypes.string
	    })
    }).isRequired,
    handleAdd: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    content: PropTypes.string.isRequired
}


export default AddPost
