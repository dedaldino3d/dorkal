import styled from 'styled-components'



const Container = styled.form`
	position: relative;
	margin: 5px;
	width: 100%;

	svg {
		position: absolute;
		top: 10px;
		left: 10px;	
		color: var(--gray-50);
		font-size: 20px !important;
	}

	input {
		width: 175px;
		background-color: var(--white);
		padding: 10px 25px 10px 40px;
		border-radius: 40px !important;
		transition: width .6s ease-in-out;
		border: 2px solid var(--blue-90);

		:focus {
			width: 100%;
			border-color: var(--blue-75);
    		box-shadow: 0 0 0 4px var(--focus-ring);
		}

		::placeholder {
			color: var(--gray-60);
			font-size: 14px;
		}
	}


`;

export const ResultContainer = styled.div`
	display: flex;
	position: absolute;
	z-index: 500;
	flex-direction: column;
	width: 100%;
	max-height:400px;

	overflow: hidden;
	overflow-Y: auto;
	background-color: var(--white);
	margin-top: 6px;
	border-radius: 10px !important;
	border: none;
	box-shadow: var(--bs-gl), var(--bs-lg);
`;

export const SearchContent = styled.div`
	
`;


export const NoFound = styled.span`
	color: #444;
	font-size: 16px;
	text-align: center;
	text-transform: uppercase;
	border-top: 1px solid #fefefe;
	border-bottom: 1px solid #fefefe;
	height: 56px;
	font-weight: 600;
`;


export default Container