/* eslint-disable no-lone-blocks */
import React, { Component } from "react";
import { ModelContext } from "./_Context/ModelContext";

export default class LikeProfile extends Component {
  render() {
    return (
      <ModelContext.Consumer>
        {(value) => {
          return (
            <div>
              <div className="card" style={{ width: 200 }}>
                <div className="card-body">
                  <button
                    className="card-title"
                    onClick={() => {
                      value.setLike();
                    }}
                    style={{ color: "red", border: " 0 solid red", backgroundColor: "none" }}
                  >
                    {value.stateLike} like
                    <i className="fa fa-heart"></i>
                  </button>
                </div>
              </div>
            </div>
          );
        }}
      </ModelContext.Consumer>
    );
  }
}
