
import React 	from 'react';
import {connect} 	from 'react-redux';

import Title 	from './components/title';
import Form 	from './components/form';
import List 	from './components/list';

import Search 	from './components/search.js';
import Sort 	from './components/sort.js';
import ToggleForm 	from './components/toggleForm.js';

class App extends React.Component {

	render(){	

		return (
			
			<div className="container">

				<React.StrictMode>
					<Title/>

					<div className="row">
				
						<Search />
						
						<Sort />
						
						<ToggleForm />

					</div>

					<Form />

					<List />
     	 		</React.StrictMode>

			</div>
		);
	}
	
}

const mapStateToProps = state => {
	return {
		isShowForm: state.isShowForm
	}
}

export default connect(mapStateToProps, null)(App);

