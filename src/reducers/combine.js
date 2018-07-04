import {combineReducers} from 'redux';
import changename from './posts';
import this_post_reducer from './this_post-reducer';
import load_comments_reducer from './this-comments-reducer';
import load_author_reducer from './this-author-reducer';

const allReducers = combineReducers({
	posts: changename,
	this_post: this_post_reducer,
	this_author: load_author_reducer,
	this_comments: load_comments_reducer
});

export default allReducers