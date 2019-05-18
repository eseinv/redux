import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { someAction } from '../../store/actions';

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

	render() {
		return (
			<div>
				<h1>page two</h1>
				<button className="btn btn-primary" onClick={this.changeUser}>
					Change User
				</button>
			</div>
		);
	}
}

PageTwo.propTypes = {
	someAction: PropTypes.func,
};

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch =>
	bindActionCreators({ someAction }, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(PageTwo);
