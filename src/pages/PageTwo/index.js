import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { someAction } from '../../store/actions';

class PageTwo extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div>
				<h1>page two</h1>
			</div>
		);
	}
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch =>
	bindActionCreators({ someAction }, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(PageTwo);
