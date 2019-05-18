import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { UserInfo } from './userinfo';

class UserPanel extends React.Component {
	state = {};

	render() {
		return (
			<div>
				<UserInfo user={this.props.state.user} />
			</div>
		);
	}
}

UserPanel.propTypes = {
	state: PropTypes.object,
};

const mapStateToProps = state => state;

export default connect(mapStateToProps)(UserPanel);
