export default function changename(state = {posts: [], setPosts: false}, action) {
    if(action.type === 'LOAD_POSTS'){
    	return action.payload
    }
    else{
    	return state
    }
}
