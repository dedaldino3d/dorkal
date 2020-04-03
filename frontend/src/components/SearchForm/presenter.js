import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { IoIosSearch } from 'react-icons/io';
import Container, {NoFound, SearchContent, ResultContainer, Divider} from './styles'
import UserList from '../UserList/presenter'





export const SearchForm = props => {

	const [hasFocus, setHasFocus] = useState(true);

	const handleFocus = event => {
		setHasFocus(hasFocus);

	}
	return (
		<Container>
			<IoIosSearch/>
			<div>
				<input type='text' placeholder='Search on Dorkal' onFocus={handleFocus}/>
				{hasFocus && <ResultSearch />}
			</div>
		</Container>
	)
};


export const ResultSearch = props => (
	<ResultContainer>
		<SearchContent>
			<RenderUserSearch userList={[1,2,3,4,5,6,7,8,9,10,11,12]}/>
		</SearchContent>
	</ResultContainer>
);


const RenderUserSearch = props =>
	props.userList.map( user => (
		<UserList user={user} key={user.user_id} />
	));



export default SearchForm
