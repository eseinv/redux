import React from 'react';
import PropTypes from 'prop-types';

const UserInfo = props => {
	if (props.user) {
		return (
			<div>
				<h1>{props.user.name}</h1>
				<p>{props.user.age}</p>
				<p className="small text-muted">{props.user.nickname}</p>
			</div>
		);
	}
	return false;
};

UserInfo.propTypes = {
	user: PropTypes.object,
};

export { UserInfo };
