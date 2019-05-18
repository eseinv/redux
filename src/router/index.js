import React from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PageOne } from '../pages/PageOne/';
import PageTwo from '../pages/PageTwo/';
import { someAction } from '../store/actions';

const Wrapper = styled.div`
	height: 100vh;
	display: flex;
	align-items: center;
`;

class MainRouter extends React.Component {
	state = {};
	render() {
		return (
			<Wrapper>
				<Router>
					<Switch>
						<Route path="/" component={PageOne} />
						<Route path="/class" component={PageTwo} />
					</Switch>
				</Router>
			</Wrapper>
		);
	}
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch =>
	bindActionCreators({ someAction }, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(MainRouter);
