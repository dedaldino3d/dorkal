import styled from 'styled-components';
import {Button} from '../button';






export const Container = styled.div`

	box-shadow: var(--bs-gl);
	max-width: 100%;
	border-radius: 5px;
	padding: 10px;
	padding-bottom: 20px;
	background: #fafafa;
	margin: 0 10px 10px;

	& > div {
		width: 100%;
		height: 30px;

		span {
			font-size: 14px;
			color: var(--blue-70);
			float: right;
			cursor: pointer;
			padding: 8px 10px;
			border-radius: 8px;
			
			:hover, :focus {
				background: var(--blue-85);
			}
		}
	}
`;


export const Table = styled.table`
	
	width: 100%;
	
	tr {
		display: flex;
		justify-content: space-between;
		padding: 5px 0;

		border-bottom: 1px solid var(--border);

		&:last-child{
			border: none;
		}

		th, td {
			text-align: left;
			color: var(--gray-80);
		}
	}
`;


export const Form = styled.form`
	max-width: 100%;
	padding-top: 12px;

	input, textarea, select {
		box-shadow: var(--bs-inset);
		border: 1px solid var(--border);
		transition: width .6s ease-in-out;
		border-radius: 8px !important;
		display: block;
		margin: 2px 0 6px;

		:focus {
			border-color: var(--blue-75);
    		box-shadow: 0 0 0 4px var(--focus-ring);
		}

		
	}
	input[type=text], textarea {
		:focus{
			width: 100%;
		}

		::placeholder {
			color: var(--gray-60);
			font-size: 14px;
		}
	}

	input[type=text] {
		
		width: 150px;
		background-color: var(--white);
		padding: 10px;
	}

	textarea {
		width: 100%;
		height: 50px;
		padding: 12px 20px;
		background-color: #f8f8f8;
		overflow: auto;
		resize: none;
	}

	select {
		border: none;
		padding: 10px;
		background: #f6f6f6;
	}

	select, input[type=date] {
		display: inline-block;
		margin-right: 10px;
	}

`;



export default Container