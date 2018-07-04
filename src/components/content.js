import React, { Component } from 'react';
import Post from './post';

class Content extends Component {
    render() {  
        return (        
          <div className="content">
          		<h1 className="App-title">Welcome to my blog</h1>
          		{this.props.posts.posts.map((post, i) => {
          			return <Post key={i} id={post.id} title={post.title} body={post.body} userId={post.userId}></Post>
          		})}
           </div>
        )
  }
}

export default Content;