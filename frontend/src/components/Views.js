import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { FaRegEye } from 'react-icons/fa';

const View = styled.span`

	padding: 5px;
	font-size: 11px;
	color: var(--gray-50);
	display: flex;
	align-items: center;
	
	:hover {
		color: var(--violet);	
	}

	& > svg {
		font-size: 12px;
		margin-left: 3px;
		margin-right: 3px;
	}

	${props => props.lg && css `
		font-size: 14px;
		svg {
			font-size: 16px;
		}
		`}
	${props => props.md && css `
		font-size: 13px;
		svg {
			font-size: 14px;
		}
		`}

`;


export const Svg = props => (

	<View {...props} >
		{props.number}{props.svg}{props.content}
	</View>
)


Svg.propTypes = {
	number: PropTypes.oneOfType([
	PropTypes.string,
	PropTypes.number
	]).isRequired,
	content: PropTypes.string,
	svg: PropTypes.element,
}

export default Svg