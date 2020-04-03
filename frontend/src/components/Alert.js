import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Btn } from './button'



const Container = styled.div`
	
	background-color: var(--gray-60);
	width: 100%;
	height: 100%;
	position: fixed;
	z-index: 10000;

	& > div {
	    display: block;
		min-width: 250px;
		min-height: 150px;
		max-width: 400px;
		padding: 0.8657em;
		margin: auto 5px;
		white-space: break-all;
		background: var(--white);
		border-radius: 10px;
		box-shadow: var(--bs-xl);
		display: flex;
		flex-flow: column wrap;
		justify-content: space-between;
	
		h1{
			font-size: 16px;
			color: var(--gray-80);
	
		}
	
		p{
			font-size: 14px;
			padding: 10px>;
		}
	
		& > div {
			align-self: flex-end;
		}
	}	
`;

const Button = styled(Btn)`
	padding: 5px 10px;	
	border: none;
	margin-right: 5px;
	
`;


export const Alert = props => {

	const [confirm, setConfirm] = useState(false);
	const [cancel, setCancel] =useState(false);

	const handleClick = event => {

	}

	return (

		<Container>
			<div>
				<h1>Deseja cancelar a subscricao?</h1>
				<p>Se cancelar a subscricao, deixara de ter os nossos conteudos sempre à hora</p>
				<div>
					<Button primary bd_xs as='Button' >Confirm</Button>
					<Button primary bd_xs as='Button' >Cancel</Button>
				</div>
			</div>
		</Container>
	)
}



export default Alert