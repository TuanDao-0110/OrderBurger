import React, { Component } from "react";
import { ExModelListContext } from "../ContextDemo/_Context/ExModelListContext";

export default class ModelItem extends Component {
  render() {
    return (
      <ExModelListContext.Consumer>
        {(value) => {
          return (
            <div>
              <div className="card text-left text-dark">
                <img className="card-img-top" src={this.props.modelItem.img} alt="default" />
                <div className="card-body">
                  <h4 className="card-title">{this.props.modelItem.name}</h4>
                  <p className="card-text">tuoi : {this.props.modelItem.age}</p>
                  <button
                    onClick={() => {
                      value.setActiveMode(this.props.modelItem.id);
                    }}
                    style={{ background: "none", border: "1px solid red", borderRadius: "5px" }}
                    className="card-text"
                  >
                    <i className="fa fa-heart" style={{ color: "red" }}></i>
                  </button>
                </div>
              </div>
            </div>
          );
        }}
      </ExModelListContext.Consumer>
    );
  }
}
