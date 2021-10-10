
import React from 'react';
import {connect} 	from 'react-redux';
import { actCloseForm, actSubmitForm, actUnSelectItem } from './../actions/index'

class Form extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			task_id 	: '',
			task_name 	: '',
			task_level 	: 0,
		}

		this.handleCancel = this.handleCancel.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.updateItem   = this.updateItem.bind(this);
		
	}

	UNSAFE_componentWillMount() {
		let item 	= this.props.itemSelected;
		this.updateItem(item)
	}

	UNSAFE_componentWillReceiveProps(nextProps){
		let item = nextProps.itemSelected;
		this.updateItem(item)
	}
	
	updateItem(item){
		if(item){
			this.setState({
				task_id		: item.id,
				task_name 	: item.name,
				task_level	: item.level

			})
		}
	}

	handleCancel(){
		this.props.formCancel();
	}

	handleChange(event){
		const target = event.target;
		const value  = target.type === 'checkbox' ? target.checked : target.value;
		const name   = target.name;
		this.setState({
			[name] : value
		})
	}

	handleSubmit(event){
		let item = {
			name	: this.state.task_name,
			level	: +this.state.task_level,
			id		: this.state.task_id,
		}
		this.props.formSubmit(item);
		event.preventDefault();
	}


	render(){
		let {isShowForm} = this.props;
		if(!isShowForm) return null;

		return (
			<div className="row">
				<div className="col-md-offset-7 col-md-5">
					<form onSubmit={this.handleSubmit} className="form-inline">
						<div className="form-group">
							<label className="sr-only" htmlFor='task_name'>label</label>
							<input onChange={this.handleChange} value={this.state.task_name} name="task_name" type="task_name" className="form-control" placeholder="Task Name" />
						</div>
						<div className="form-group">
							<label className="sr-only" htmlFor='task_level'>label</label>
							<select onChange={this.handleChange} value={this.state.task_level} name="task_level" className="form-control" required="required">
								<option value={0}>Small</option>
								<option value={1}>Medium</option>
								<option value={2}>High</option>
							</select>
						</div>
						<button type="submit" className="btn btn-primary">Submit</button>
						<button onClick={this.handleCancel} type="button" className="btn btn-default">Cancel</button>
					</form>
				</div>
			</div>
		);
	}
	
}

const mapStateToProps = state => {
	return {
		isShowForm	: state.isShowForm,
		itemSelected: state.itemSelected,
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	// console.log(ownProps)
	return {
		formCancel: () => {
			dispatch(actCloseForm())
			dispatch(actUnSelectItem())
		},
		formSubmit: (item) => {
			dispatch(actSubmitForm(item))
			dispatch(actCloseForm())
		},
		
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);

