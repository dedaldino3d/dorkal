import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { IoIosSearch } from 'react-icons/io';
import Container, {NoFound, SearchContent, ResultContainer, Divider} from './styles'
import UserList from '../UserList'





export const SearchForm = props => {
	
	const [hasFocus, setHasFocus] = useState(false);

	const handleClick = () => {
		setHasFocus(true);
	}

	return (
		<Container>
			<IoIosSearch/>
			<form onSubmit={props.handleSubmit}>
				<input type='text' placeholder='Search on Dorkal'onClick={handleClick} value={props.value} onChange={props.onInputChange}/>
				{hasFocus && <ResultSearch {...props} />}
			</form>
		</Container>
	)
};


export const ResultSearch = props => (
	<ResultContainer>
		<SearchContent>
			<RenderUserSearch userList={props.userList}/>
		</SearchContent>
	</ResultContainer>
);


const RenderUserSearch = props =>
	props.userList.map( user => (
		<UserList user={user} key={user.user_id} />
	));



export default SearchForm
