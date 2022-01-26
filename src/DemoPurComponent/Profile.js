import React, { Component, PureComponent } from "react";

export default class Profile extends PureComponent {
  render() {
    return (
      <div className="mb-3" key={1}>
        {console.log("load againt")}
        <div className="card text-white bg-primary" style={{ width: "200px" }}>
          <img className="card-img-top" src="https://picsum.photos/200/300" style={{ width: "200px", height: "200px" }} alt="hinh anh" />
          <div className="card-body">
            <h3>
              {" "}
              so luong tim : <i className="fa fa-heart"> {this.props.like}</i>
            </h3>
            <h4 className="card-title">Profile</h4>
            <p className="card-text">tuoi</p>
          </div>
        </div>
      </div>
    );
  }
}
