import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
			<div className="container">
				<div className="row">
					<div className="col-12">
						<Wrapper>
							<Router>
								<Switch>
									<Route path="/" component={PageOne} />
									<Route path="/class" component={PageTwo} />
								</Switch>
							</Router>
						</Wrapper>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.root'));
