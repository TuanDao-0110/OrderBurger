import React, { Component } from "react";
import ModelList from "./ModelList";
import ProfileModel from "./ProfileModel";
import ExModelStateProvider from "../ContextDemo/_Provider/ExModelStateProvider";
export default class ExContextModalList extends Component {
  render() {
    return (
      <ExModelStateProvider>
        <div className="container">
          <ProfileModel />
          <ModelList />
        </div>
      </ExModelStateProvider>
    );
  }
}
