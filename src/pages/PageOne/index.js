import React from 'react';
import PropTypes from 'prop-types';
import UserPanel from './userpanel';

const PageOne = props => (
	<div>
		<h1>Page One</h1>
		<button
			className="btn btn-secondary"
			onClick={() => props.history.push('/class')}
		>
			{' '}
			go to page two{' '}
		</button>
		<UserPanel />
	</div>
);

PageOne.propTypes = {
	history: PropTypes.object,
};

export { PageOne };
