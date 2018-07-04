export default function load_author_reducer(state = [], action) {
    if(action.type === 'LOAD_THIS_AUTHOR'){
    	return action.payload
    }
    else{
    	return state
    }
}