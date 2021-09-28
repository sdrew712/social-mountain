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
  }

  async componentDidMount() {
    const postsData = await axios.get(
      "https://practiceapi.devmountain.com/api/posts"
    );

    this.setState({ posts: postsData.data });
  }

  updatePost() {}

  deletePost() {}

  createPost() {}

  render() {
    const { posts } = this.state;

    return (
      <div className="App__parent">
        <Header />

        <section className="App__content">
          <Compose />
          {posts.map((data, index) => (
            <Post key={index} date={data.date} text={data.text} />
          ))}
        </section>
      </div>
    );
  }
}

export default App;
