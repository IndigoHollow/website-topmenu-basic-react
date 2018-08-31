import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class Menu extends React.Component {
  render() {
    let items = ["Home", "Price", "Services", "Our partners", "Contacts"];

    return (
      <div className="topMenu">
        {items.map((value, index) => {
          return <List value={value} index={index} />;
        })}
      </div>
    );
  }
}

class List extends React.Component {
  render() {
    let url =
      "/" +
      this.props.value
        .toLowerCase()
        .trim()
        .replace(" ", "-") +
      ".html";

    return (
      <div key={this.props.index}>
        <a href={url}>{this.props.value}</a>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Menu />, rootElement);
