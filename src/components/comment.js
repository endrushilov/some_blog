import React, { Component } from 'react';

class Comment extends Component {
    render() {  
        return (        
          <div className="comment">
          		{this.props.comment}
           </div>
        )
  }
}

export default Comment;