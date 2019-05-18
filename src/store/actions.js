export const someAction = data => ({
	type: 'SOME_ACTION',
	payload: data,
});

export const changeName = data => ({
	type: 'SOME_ACTION_TYPE',
	name: data,
});

/*

1) Create an interface to let me update user object
2) Create a way  or the user object to persist through reload
3) Store history for evey edit in an array of values, and show this
4) Let me change edit history ORDER
5) Store ALL that somehow through reload

*/
