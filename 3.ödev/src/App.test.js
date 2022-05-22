import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Header from "./Header";
import EmojiResults from "./EmojiResults";
import EmojiResultRow from "./EmojiResultRow";
import PropTypes from "prop-types";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);

  ReactDOM.render(<EmojiResults />, div);
});


it("header component varmı", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Header />, div);
});

