import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { someAction, changeName } from '../../store/actions';

class PageTwo extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	changeUser = () => {
		const newUser = {
			name: 'Jane Doe',
			age: 24,
			nickname: 'Jeane',
		};
		return this.props.someAction(newUser);
	};

	changeName = () => {
		const newName = 'Ievgen';
		return this.props.changeName(newName);
	};

	render() {
		console.log(this.props);
		return (
			<div>
				<h1>page two</h1>
				<button className="btn btn-primary" onClick={this.changeUser}>
					Change User
				</button>
				<button className="btn btn-primary" onClick={this.changeName}>
					Change Name to Ievgen
				</button>
			</div>
		);
	}
}

PageTwo.propTypes = {
	someAction: PropTypes.func,
	changeName: PropTypes.func,
};

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch =>
	bindActionCreators({ someAction, changeName }, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(PageTwo);
