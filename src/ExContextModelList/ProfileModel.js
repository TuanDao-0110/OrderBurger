import React, { Component } from "react";
import { act } from "react-dom/cjs/react-dom-test-utils.production.min";
import { ExModelListContext } from "../ContextDemo/_Context/ExModelListContext";

export default class ProfileModel extends Component {
  render() {
    return (
      <ExModelListContext.Consumer>
        {(value) => {
          let activeModel = value.modelListState.find((model) => model.active === true);
          console.log(activeModel);
          return (
            <div>
              <div className="card text-left" style={{ width: 200 }}>
                <img className="card-img-top" src={activeModel.img} alt="tao thao" />
                <div className="card-body">
                  <h4 className="card-title">{activeModel.age}</h4>
                  <p className="card-text">tuoi : {activeModel.age}</p>
                  <p className="card-text">
                    luot like : {activeModel.like} <i className="fa fa-heart" style={{ color: "red" }}></i>
                  </p>
                </div>
              </div>
            </div>
          );
        }}
      </ExModelListContext.Consumer>
    );
  }
}
