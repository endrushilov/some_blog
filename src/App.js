import React, { Component } from 'react';
import './App.css';
import Content from './components/content';
import {bindActionCreators} from 'redux';
import axios from "axios";
import {connect} from 'react-redux';
import loadposts from './actions/load';

class App extends Component {
  componentWillMount(){
      const url = 'https://jsonplaceholder.typicode.com/posts/';
      axios.get(url)
        .then(response => {
            this.props.loadposts({posts: response.data, setPosts: true});
        })
        .catch(function (error) {
          console.log(error);
        });
  }
  render() {
    return (
      <div className="App">
        {this.props.posts.setPosts ? <Content posts={this.props.posts}></Content> : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    setPosts: state.setPosts
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadposts: loadposts
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
