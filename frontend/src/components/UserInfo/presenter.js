import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MdEdit } from 'react-icons/md';
import Container, { Table, Form } from './styles'
import Button from '../button';



export const UserInfo = props => (
	<Container>
		{!props.edit && 
		(<div>
			<span onClick={props.handleEditClick}><MdEdit/>Edit Profile</span>
		</div>)
		}
		{ !props.edit ?
			<Table>
				<tr>
					<th>First name</th>
					<td>{props.profile.fist_name}</td>
				</tr>
				<tr>
					<th>Last name</th>
					<td>{props.profile.last_name}</td>
				</tr>
				<tr>
					<th>Gender</th>
					<td>{props.profile.gender}</td>
				</tr>
				<tr>
					<th>Location</th>
					<td>{props.profile.location}</td>
				</tr>
				<tr>
					<th>Ocupation</th>
					<td>{props.profile.occupation}</td>
				</tr>
				<tr>
					<th>Date of birth</th>
					<td>{props.profile.DOB}</td>
				</tr>
				<tr>
					<th>About</th>
					<td>{props.profile.about}</td>
				</tr>
			</Table> :
			<Form method="POST" onSubmit={props.handleSubmit}>
				<input type='text' onChange={props.handleChange} placeholder='First name' name='first_name' />
				<input type='text' onChange={props.handleChange} placeholder='Last name' name="last_name" />
				<select name="gender">
					<option value="Male">Male</option>
					<option value="Female">Female</option>
				</select>
				<input type='date' onChange={props.handleChange} name='DOB'/>
				<textarea type='text' onChange={props.handleChange} placeholder='Occupation' name='occupation'/>
				<textarea type='text' onChange={props.handleChange} placeholder='About you' name='about' />
				<Button bd_xs as="button" type="submit" title="Update Profile" />
			</Form>
		}
	</Container>
);


UserInfo.propTypes = {
	profile: PropTypes.shape({
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		gender: PropTypes.string,
		occupation: PropTypes.string,
		about: PropTypes.string,
		DOB: PropTypes.oneOf(
			PropTypes.string,
			PropTypes.number
		),
		edit: PropTypes.bool.isRequired,
		handleEditClick: PropTypes.func.isRequired,
		handleChange: PropTypes.func.isRequired,
		handleSubmit: PropTypes.func.isRequired,
	})
}


export default UserInfo