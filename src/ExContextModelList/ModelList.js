import React, { Component } from "react";
import { ExModelListContext } from "../ContextDemo/_Context/ExModelListContext";
import ModelItem from "./ModelItem";
export default class ModelList extends Component {
  render() {
    return (
      <ExModelListContext.Consumer>
        {(value) => {
          return (
            <div>
              <h3>danh sách Idol</h3>
              <div className="row">
                {value.modelListState.map((item, index) => {
                  return (
                    <div className="col-3" key={index}>
                      <ModelItem modelItem={item}></ModelItem>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        }}
      </ExModelListContext.Consumer>
    );
  }
}
