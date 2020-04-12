import styled, { css } from 'styled-components'



export const Button = styled.button`
	/* border: 1px solid var(--violet); */
	border: none;
	color: var(--white);
	padding: 5px 15px;
	background-color: var(--violet);
	border-radius: 40px !important;
	align-self: center;
	font-weight: bold;
	flex: 1 5 auto;
	cursor: pointer;
	
	${props => props.outline && css`
		background-color: var(--white);
		color: var(--violet)

		`}

`

export default Button