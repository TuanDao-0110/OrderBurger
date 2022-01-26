import React, { Component } from "react";
import LikeProfile from "./LikeProfile";
import ModelPromfile from "./ModelPromfile";
import ModelStateProvider from "./_Provider/ModelStateProvider";

export default class ContextDemo extends Component {
  render() {
    return (
      <ModelStateProvider>
        <div className="container">
          <ModelPromfile />
          <LikeProfile />
        </div>
      </ModelStateProvider>
    );
  }
}
