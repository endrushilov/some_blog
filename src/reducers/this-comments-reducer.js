export default function load_comments_reducer(state = [], action) {
    if(action.type === 'LOAD_THIS_COMENTS'){
    	return action.payload
    }
    else{
    	return state
    }
}