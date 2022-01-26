import React, { Component } from "react";
import { ModelContext } from "./_Context/ModelContext";

export default class ModelPromfile extends Component {
  render() {
    return (
      <ModelContext.Consumer>
        {(value) => {
          return (
            <div>
              <h3>Profile</h3>
              <div className="card" style={{ width: 200 }}>
                <img
                  className="card-img-top"
                  style={{ height: 300, width: "100%" }}
                  src="https://1075koolfm.com/wp-content/uploads/2021/04/nlu5k76kyqf31.jpg"
                  alt="https://1075koolfm.com/wp-content/uploads/2021/04/nlu5k76kyqf31.jpg"
                />
                <div className="card-body">
                  <h4 className="card-title">Name</h4>
                  <p className="card-text">Age</p>
                  <span style={{ color: "pink" }}>
                    {value.stateLike} <i className="fa fa-heart"></i>
                  </span>
                </div>
              </div>
            </div>
          );
        }}
      </ModelContext.Consumer>
    );
  }
}
