import styled, { css } from 'styled-components'



export const Button = styled.button`
	/* border: 1px solid var(--violet); */
	border: none;
	color: var(--white);
	padding: 5px 15px;
	background-color: var(--violet);
	border-radius: 40px !important;
	height: 30px;
	align-self: center;
	font-weight: bold;
	cursor: pointer;
	
	${props => props.outline && css`
		background-color: var(--white);
		color: var(--violet)

		`}

`

export default Button