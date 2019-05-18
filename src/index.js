import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PageOne } from './pages/PageOne/';
import PageTwo from './pages/PageTwo/';

class App extends React.Component {
	state = {};

	render() {
		return (
			<div>
				<Router>
					<Switch>
						<Route path="/" component={PageOne} />
						<Route path="/class" component={PageTwo} />
					</Switch>
				</Router>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.root'));
