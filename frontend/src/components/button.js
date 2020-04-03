import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';



export const Btn = styled.a`
	
	display: inline-block;
	padding: 8px 15px;
	border: 1px solid var(--violet);
	background: transparent;
	color: var(--violet);
	box-shadow: var(--bs-inset);
	cursor: pointer;
    transform: transform 80ms ease-in-out;
	font-size: 13px;
	font-family: Arial;
	font-weight: bold;
	
    :active {
        transform: scale(0.95);
    }

	:hover {
		background-color: var(--violet);
		border-color: var(--violet);
		color: var(--white);
	}
	
	${props => props.primary && css`
		background-color: var(--violet);
		color: var(--white);
		`};	
	${props => props.bd_lg && css`
		border-radius: 20px !important;
		`}
	${props => props.bd_md && css`
		border-radius: 10px !important;
		`}
	${props => props.bd_xs && css`
		border-radius: 5px !important;
		`}

	${props => props.outline && css`
		border-color: var(--white);
		color: var(--white);
		background: transparent
	 `}
`;


export const Button = props => (

	<Btn 
	{...props}
	>
		{props.title}
	</Btn>
);


Button.defaultProps = {
	type: "button",
	title: "Dorkal",
}

Button.propTypes = {
	type: PropTypes.string,
	title: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]).isRequired,
	handleClick: PropTypes.func,
}



export default Button
