import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MainRouter from './router/';
import { store } from './store/';

class App extends React.Component {
	state = {};

	render() {
		console.log(this.props);
		return (
			<Provider store={store}>
				<div className="container">
					<div className="row">
						<div className="col-12">
							<MainRouter />
						</div>
					</div>
				</div>
			</Provider>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.root'));
