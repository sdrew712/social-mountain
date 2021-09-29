import React, { Component } from "react";
import axios from "axios";
import Post from "./Post/Post";

import "./App.css";

import Header from "./Header/Header";
import Compose from "./Compose/Compose";

class App extends Component {
  constructor() {
    super();

    this.state = {
      posts: [],
    };

    this.updatePost = this.updatePost.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.createPost = this.createPost.bind(this);
    this.searchPost = this.searchPost.bind(this);
  }

  async componentDidMount() {
    const postsData = await axios.get(
      "https://practiceapi.devmountain.com/api/posts"
    );

    this.setState({ posts: postsData.data });
  }

  async updatePost(id, text) {
    await axios
      .put(`https://practiceapi.devmountain.com/api/posts?id=${id}`, { text })
      .then((res) => {
        this.setState({ posts: res.data });
      });
  }

  async deletePost(id) {
    await axios
      .delete(`https://practiceapi.devmountain.com/api/posts?id=${id}`)
      .then((res) => {
        this.setState({ posts: res.data });
      });
  }

  async createPost(text) {
    await axios
      .post(`https://practiceapi.devmountain.com/api/posts/`, { text })
      .then((res) => {
        this.setState({ posts: res.data });
      });
  }

  async searchPost(text) {
    await axios
      .get(`https://practiceapi.devmountain.com/api/posts/filter?text=${text}`)
      .then((res) => {
        this.setState({ posts: res.data });
      });
  }

  render() {
    const { posts } = this.state;

    return (
      <div className="App__parent">
        <Header searchPostFn={this.searchPost} />

        <section className="App__content">
          <Compose createPostFn={this.createPost} />
          {posts.map((data, index) => (
            <Post
              key={index}
              id={data.id}
              date={data.date}
              text={data.text}
              updatePostFn={this.updatePost}
              deletePostFn={this.deletePost}
            />
          ))}
        </section>
      </div>
    );
  }
}

export default App;
