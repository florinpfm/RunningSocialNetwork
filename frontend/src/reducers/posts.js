import {
	ADD_POST,
	GET_ALL_POSTS,
	POST_ERROR,
	DELETE_POST,
	UPDATE_POST,
	ADD_LIKE,
	UNLIKE,
} from '../actions/actionsConstants';

const initialState = {
	posts: [],
	post: null, // e folosit la UPDATE_POST
	loading: true,
	error: {},
	likes: [],
};

export default function posts(state = initialState, action) {
	const { type, payload } = action;
	
	switch (type) {
		case ADD_POST:
			return {
				...state,
				// add the new post from the payload into the array of posts
				posts: [payload, ...state.posts], //aici punem noul "post" inaintea la ...state.posts pt ca vrem sa apara primul in website, ca fiind ultimul nou aparut
				loading: false,
			};

		case GET_ALL_POSTS:
			console.log('reducer posts.js--> we have GET_ALL_POSTS and all the posts from payload are put in "posts": ');
			return {
				...state,
				posts: payload,
				loading: false,
			};

		case DELETE_POST:
			return {
				...state,
				// the list of post that does not contain the deleted one
				posts: state.posts.filter((post) => post._id !== payload),
				loading: false,
			};

		case UPDATE_POST:
			return {
				...state, 
				post: state.posts.map((post) => post._id === payload.id ? payload : post),
			};
		
		case ADD_LIKE:
			return {
				...state,
				likes: payload, 
			};

		case UNLIKE: 
			return {
				...state,
				likes: state.likes.filter((like) => like.user !== payload.user),
			};

		// case UPDATE_LIKES:
		// 	return {
		// 		...state,
		// 		posts: state.posts.map((post) =>
		// 			(post._id === payload.id) ? { ...post, likes: payload.likes } : post
		// 		),
		// 		loading: false,
		// 	};

		case POST_ERROR:
			return {
				...state,
				error: payload,
				loading: false,
			};

		default:
			return state;
	}
}