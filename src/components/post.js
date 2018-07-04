import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Post extends Component {
    render() {  
    	const url = this.props.id;
        return ( 
        	<Link className="post-one" to={`/posts/${url}`}>
	        	<div className="post-one-content" key={this.props.key}>  
	        		<h2 className="post-title">{this.props.title}</h2>
	        		<p className="post-text">{this.props.body}</p>
	        	</div>
	        </Link>
        );
  }
}

export default Post;