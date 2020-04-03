import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import AddPost_Presenter from './presenter'


export class AddPost extends PureComponent {

	state = {
		content: "",
		file: "",
		tags: [],
		isLoading: true
	}

	static propTypes = {
		submitPost: PropTypes.func.isRequired,
	}

	componentWillReceiveProps(nextProps){
		if(nextProps.user){
			this.setState({
				isLoading: false
			})
		}
	}

	_handleInputChange = event => {

		const { target: { value}} = event;

		this.setState({
			content: value,
			file: "",
		})
	}


	_handleSubmit = event => {
		event.preventDefault();
		const { submitPost } = this.props;
		const { content, file, tags } = this.state;
		const dataSer = JSON.stringify(content, file, tags)
		submitPost(dataSer)
	}

	render(){
		const { user } = this.props;
		
		return (
			<AddPost_Presenter
			user={user}
			hadleSubmit={this._handleSubmit}
			handleInputChange={this._handleInputChange}
			{...this.state}
			/>
		)
	}
}


export default AddPost