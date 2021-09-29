import React, { Component } from "react";

import "./Search.css";

import SearchIcon from "react-icons/lib/md/search";

//////////////////////////////////////////////////////// THIS COMPONENT IS BEING RENDERED IN THE *HEADER* COMPONENT

export default class Search extends Component {
  constructor() {
    super();

    this.state = {
      searchText: "",
    };
  }

  render() {
    const { searchText } = this.state;

    return (
      <section className="Search__parent">
        <div className="Search__content">
          <input
            placeholder="Search Your Feed"
            value={searchText}
            onChange={({ target }) => {
              this.setState({ searchText: target.value });
            }}
          />

          <SearchIcon
            id="Search__icon"
            onClick={() => {
              this.props.searchPostFn(this.state.searchText);
            }}
          />
        </div>
      </section>
    );
  }
}
