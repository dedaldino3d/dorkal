import styled from 'styled-components';



export const Container = styled.main`

	display: flex;
	flex-flow: column wrap;
	justify-content: center;
	max-width: 100%;
	padding: 5em 0 0;
	background-color: var(--white);
	

	& > div:first-child{
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
	}

	@media (max-width: 46.8em){
        max-width: 100%;
        flex-direction: column;

    } 
`;


export const Header = styled.div`

	& > #auth {
		display: none;
		max-width: 100%;
		height: 100%;
		position: fixed;
		right: 0;
		top: 0;
		background-color: var(--white);
		z-index: 800;
		padding: 14px;
		overflow: auto;
		
		& > #modal-content {
			padding-top: 50px;
			margin: auto;
			width: 100%;
			display: block;
			max-width: 450px;
			
		}
		&, #modal-content{

			-webkit-animation-name: left-appearence;
			-webkit-animation-duration: 1s;
			animation-name: left-appearence;
			animation-duration: 1s;

			@-webkit-keyframes left-appearence {
				from {
					-webkit-transform: translateX(50%);
				}
				to {
					-webkit-transform: translateX(0%);
				}
			}
			
			@keyframes left-appearence {
				from {
					transform: translateX(50%);
				}
				to{
					transform: translateX(0%);
				}
			}
		}

		& > #close {
			cursor: pointer;
			position: absolute;
			top: 15px;
			left: 35px;
			font-size: 18px;
			font-weight: bold;
			transition: 0.3s;
			color: var(--gray-90);
		}

		@media only screen and (max-width: 450px){
			#modal-content{
				width: 100%;
			}
		}
	}
	
`;


export const HomeHeader = styled.div`
	display: flex;
    flex-flow: row nowrap;
    padding: .43em .8em;
    justify-content: space-between;
    align-items: center;
    background-color: var(--white);
    width: 100%;
    min-height: 4em;
    max-height: 5em;
    z-index: 800;
    position: fixed;
    top: 0;
    left: 0;
    border-bottom: 1px solid var(--gray-10);
    box-shadow: var(--bs-gl);
    overflow: hidden;

    & > div {

    	a {
			margin-right: 5px;
    	}
    }
   
`;

export const InfoHome = styled.div`
	
	box-shadow: var(--bs-xl);
	padding: 20px;
	flex: 3 1 auto;
	border-radius: 10px;
	max-width: 100%;
	margin: 15px;

	p {
		font-size: 16px;
	}
	
	& > div {
		white-space: break-all;
		padding: 20px 15px 10px;
		max-width: 450px;

		header {
			width: 100%;

			h1{
				font-size: 22px;
				text-transform: capitalize;
			}
		}

		p:first-of-type{
			margin-bottom: .5em;
		}
	}

	@media screen and (max-width: 31.8em){
		text-align: center;

	}

`;


export const TheBest = styled.div`

	display: flex;
	justify-content: center;
	flex-direction: column;
	margin-top: 4em;
	margin-bottom: 1em;

	div {
		header{
			margin-bottom: 1.5em;

			h1{
				font-size: 22px;
				word-spacing: 1px;
				line-height: 2px;
				text-transform: uppercase;
				text-align: center;
			}
		}
	}

	& > div:first-of-type {
		margin-bottom: 1em;
	}

	& > div:last-of-type {
		margin-bottom: 2em;
	}
`;


export const Footer = styled.footer`

	background-color: #24292e;
	padding: 30px;
	width: 100%;
	min-height: 5em;
	display: flex;
	justify-content: space-between;
	overflow: visible;
	border-top: 1px solid var(--border);
	color: var(--white);
	
	& > p {
		display: block;
		margin-right: 1em;
		font-size: 16px;

	}

`;


export default Container