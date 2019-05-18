import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { store } from './store/';
import { PageOne } from './pages/PageOne/';
import PageTwo from './pages/PageTwo/';

const Wrapper = styled.div`
	height: 100vh;
	display: flex;
	align-items: center;
`;

class App extends React.Component {
	state = {};

	render() {
		return (
			<Provider store={store}>
				<div className="container">
					<div className="row">
						<div className="col-12">
							<Wrapper>
								<Router>
									<Switch>
										<Route path="/" component={PageOne} />
										<Route
											path="/class"
											component={PageTwo}
										/>
									</Switch>
								</Router>
							</Wrapper>
						</div>
					</div>
				</div>
			</Provider>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.root'));
