const initialState = {
	tasks: [],
	completedTasks: [],
	user: {
		name: '',
		age: '',
		nickname: '',
	},
};

// Initial state is 100% optional. If you don't have one, use state = {}, so
// it'll be empty. It's a really good idea to define the initial state though
// considering you can have 1 state per app, or 1 per page if you wanted to.

const reducers = (state = initialState, action) => {
	switch (action.type) {
		case 'ONE':
			return state;
		default:
			return state;
	}
};

export default reducers;
