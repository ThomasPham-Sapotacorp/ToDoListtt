
import React from 'react';
import {connect} 	from 'react-redux';
import _ from 'lodash';

import Item 	from './item';

class List extends React.Component {


	render(){
		let elmItem = <tr><th colSpan={4}>Không có công việc</th></tr>;

		let {items, search, sort} = this.props;
		let {orderBy, orderDir}	  = sort;
		
		let itemsOrigin	= (items) ? [...items] : [];

		//Search
		items = _.filter(itemsOrigin, (item) => {
		 			return _.includes(item.name.toLowerCase(), search.toLowerCase())
		 		});

		//Sort
		items = _.orderBy(items, [orderBy], [orderDir]);
		
		if(items.length){
			elmItem = items.map((item, index) => {
				return (
					<Item 
						key		= {index} 
						item	= {item} 
						index	= {index} 
					/>
				);
			})
		}
		
		return (
			<div className="panel panel-success">
				<div className="panel-heading">
					List Task
				</div>
				<table className="table table-hover ">
					<thead>
						<tr>
							<th style={{width: '10%'}} className="text-center">#</th>
							<th>Task</th>
							<th style={{width: '20%'}} className="text-center">Level</th>
							<th style={{width: '20%'}}>Action</th>
						</tr>
					</thead>
					<tbody>
						{elmItem}
					</tbody>
				</table>
			</div>
		);
	}
	
}

const mapStateToProps = state => {
	return {
		items : state.items,
		search: state.search,
		sort  : state.sort,
	}
}

export default connect(mapStateToProps, null)(List);
