import React from 'react'
import styled from 'styled-components'
import Avatar from '../Avatar'
import ButtonFollow from '../ButtonFollow/container'


const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	border-bottom: 1px solid var(--gray-30);
	padding: 0.1em .6em 0.3em;
	cursor: pointer;
	
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 10px;
	flex: 1 1 auto;

	span {
		font-size: 13px;
		color: #888;
		display: block;
	}

	div:first-of-type{
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 4px;
		
		div {
			display: block;
			margin-right: 1em;
			a {
				margin-bottom: 2px;
			}
			
		}
	}

	div:last-child{
		display: flex;
		justify-content: space-between;
		max-width: 200px;
	}
`;


export const UserList = props => (
	<Container>
		<Avatar
		source={require('../../images/noPhot.jpg')}
		alt='Lista de usuarios'
		tam={40}
		/>
		<Content>
			<div>
				<div>
					<a>Dedaldino A.</a>
					<span>@dedaldino3D</span>
				</div>
				<ButtonFollow/>
			</div>
			<div>
				<span>{45}M Followers</span>
				<span>{13}Following</span>
			</div>
		</Content>
	</Container>
)



export default UserList


