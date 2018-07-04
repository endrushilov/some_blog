export default function clickpost_reducer(state = {this_post: ""}, action) {
    if(action.type === 'LOAD_THIS_POST'){
    	return action.payload
    }
    else{
    	return state
    }
}