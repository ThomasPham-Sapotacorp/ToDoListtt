
import React from 'react';
import {connect} 	from 'react-redux';
import { actToggleForm, actUnSelectItem } from './../actions/index'

class ToggleForm extends React.Component {

	toggleForm = () => {
		this.props.handleToggle(); //dispatch({type: 'TOGGLE_FORM'})
	}

	render(){	
		let isShowForm = this.props.isShowForm

		let btnName = "Add Task";
		let btnClass = "success";
		if(isShowForm){
			btnName = 'Close Form';
			btnClass = "danger";
		}
		
		return (		
			<div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
				<button onClick={this.toggleForm} type="button" className={`btn btn-${btnClass} btn-block`}>{btnName}</button>
			</div>	
		);
	}
	
}


const mapStateToProps = state => {
	return {
		isShowForm: state.isShowForm
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		handleToggle: () => {
			dispatch(actToggleForm())
			dispatch(actUnSelectItem())
		}
		
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ToggleForm);
