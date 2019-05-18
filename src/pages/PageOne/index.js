import React from 'react';
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

export { PageOne };
