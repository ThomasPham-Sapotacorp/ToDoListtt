
import React from 'react';
import {connect} 	from 'react-redux';
import { actSort } from './../actions/index'

class Sort extends React.Component {

	handleSort = (orderBy, orderDir) => {
		this.props.sortItem(orderBy, orderDir)
	}

	render(){
		
		let {orderBy, orderDir} = this.props.sort
		
		return (
			<div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
				<div className="dropdown">
					<button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
						Sort by <span className="caret" />
					</button>
					<ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
						<li><a onClick={() => this.handleSort('name', 'asc')} href="/#" role="button">Name ASC</a></li>
						<li><a onClick={() => this.handleSort('name', 'desc')} href="/#" role="button">Name DESC</a></li>
						<li role="separator" className="divider" />
						<li><a onClick={() => this.handleSort('level', 'asc')} href="/#" role="button">Level ASC</a></li>
						<li><a onClick={() => this.handleSort('level', 'desc')} href="/#" role="button">Level DESC</a></li>
					</ul>
					<button className="btn btn-info">{orderBy +'-'+ orderDir}</button>
				</div>
			</div>

		);
	}
	
}


const mapStateToProps = state => {
	return {
		sort  : state.sort,
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	// console.log(ownProps)
	return {
		sortItem: (orderBy, orderDir) => {
			dispatch(actSort(orderBy, orderDir))
		}
		
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Sort);
