import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import AddPost_Presenter from './presenter'


export class AddPost extends PureComponent {

	state = {
		add: false,
		content: "",
		file: "",
		tags: [],
	}

	static propTypes = {
		submitPost: PropTypes.func.isRequired,
	}

	_handleAdd = () => {
		this.setState(state =>({
			add: !state.add
		}))
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
		const dataSer = JSON.stringify(content, file, tags);
		submitPost(dataSer);
	}

	render(){
		const { user, isLoading } = this.props;
		
		if(isLoading){
			return <h2>Loading add post..</h2>
		}else{
			return (
				<AddPost_Presenter
				user={user}
				hadleSubmit={this._handleSubmit}
				handleAdd={this._handleAdd}
				handleInputChange={this._handleInputChange}
				{...this.state}
				/>
			)
		}
	}
}


export default AddPost