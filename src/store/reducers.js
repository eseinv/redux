// const getName = () => {
// 	const user = localStorage.getItem('user');
// 	const parse = JSON.parse(user);
// 	return user.name;
// };

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
		case 'SOME_ACTION':
			return { ...state, user: action.payload };
		/* I'm using action.payload here since inside the action I passed data
			as payload, and type as type. I can pass data as chingadera, in which case,
			i'd be using action.chingadera. I can also pass shit specific, so I can do
			name: data.username, age: data.age, and then use from action.name, action.page
			Right now, I'm expecting action.payload to be a user = {}, much like in initialState up top
			*/
		case 'SOME_ACTION_TYPE': {
			const { user, completedTasks } = state;
			completedTasks.push(action.name);
			user.name = action.name;
			return { ...state, user, completedTasks };
		}
		default:
			return state;
	}
};

export default reducers;
