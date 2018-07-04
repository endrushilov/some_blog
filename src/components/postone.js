import React, { Component } from 'react';
import axios from "axios";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import load_this_post from '../actions/load_this_post';
import load_this_coments from '../actions/load_this_coments';
import load_this_author from '../actions/load_this_author';
import Comment from './comment';

class Postone extends Component {
    loadAuthor(data){
        let url_for_author = 'https://jsonplaceholder.typicode.com/users';
        axios.get(url_for_author)
            .then(response => {
                response.data.map((elem, i) => {
                    if(elem.id === data.userId){
                        this.props.load_this_author(elem.name);
                    }
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    loadComents(data, url){
        let url_for_coments = `https://jsonplaceholder.typicode.com${url}/comments`;
        axios.get(url_for_coments)
            .then(response => {
                this.props.load_this_coments(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    componentWillMount(){
        const this_url = window.location.pathname;
        const get_url = `https://jsonplaceholder.typicode.com${this_url}`;
        axios.get(get_url)
            .then(response => {
                this.props.load_this_post(response.data);   
                this.loadAuthor(response.data);
                this.loadComents(response.data, this_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    render() {  
        console.log(this.props.comments);
        return ( 
            <div className="post-description-wrap">
            	<div className="post-description">  
                    <span className="post-author">{this.props.author}</span>
    	        	<div className="post-description-post">
                        <span className="post-description-title">{this.props.post.title}</span>
                        <div className="post-description-body">{this.props.post.body}</div>
                    </div>
                    <div className="comments-wrap">
                        <h3 className="comments-title">Comments</h3>
                        {this.props.comments.map((comment, i) => {
                            return <Comment key={i} comment={comment.body}></Comment> 
                        })}
                    </div>
    	        </div>
            </div>
        );
  }
}

const mapStateToProps = (state) => {
  return {
    post: state.this_post,
    author: state.this_author,
    comments: state.this_comments
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    load_this_post: load_this_post,
    load_this_coments: load_this_coments,
    load_this_author: load_this_author
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Postone);