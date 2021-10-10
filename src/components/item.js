
import React from 'react';
import {connect} 	from 'react-redux';
import { actOpenForm, actDeleteItem, actSelectedItem } from './../actions/index'

class Item extends React.Component {

	Showlevel(lev){
		switch(lev) {
			case 0:
				return <span className="label label-default">Small</span>;
			case 1:
				return <span className="label label-info">Medium</span>;
			case 2:
				return <span className="label label-danger">High</span>;
			default:
				return <span className="label label-default">Small</span>;
		}
	}

	handleDelete = (id) => {
		this.props.deleteItem(id)
	}
	handleEdit = (item) => {
		this.props.editItem(item)
	}

	render(){
		let {item} = this.props;
		let {index} = this.props;

		return (
			<tr>
				<td className="text-center">{index}</td>
				<td>{item.name}</td>
				<td className="text-center">{this.Showlevel(item.level)}</td>
				<td>
					<button onClick={() => this.handleEdit(item)} type="button" className="btn btn-warning">Edit</button>
					<button onClick={() => this.handleDelete(item.id)} type="button" className="btn btn-danger">Delete</button>
				</td>
			</tr>
		);
	}
	
}


// const mapStateToProps = state => {
// 	return null
// }

const mapDispatchToProps = (dispatch, ownProps) => {
	// console.log(ownProps)
	return {
		editItem: (item) => {
			dispatch(actOpenForm())
			dispatch(actSelectedItem(item))
		},
		deleteItem: (id) => {
			dispatch(actDeleteItem(id))
		}
		
	}
}

export default connect(null, mapDispatchToProps)(Item);
