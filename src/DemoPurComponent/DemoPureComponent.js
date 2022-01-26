import React, { Component } from "react";
import Profile from "./Profile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faHeart } from "@fortawesome/free-solid-svg-icons";

export default class DemoPureComponent extends Component {
  state = {
    like: 0,
  };
  likeImage = () => {
    let likeTemp = this.state.like;
    likeTemp++;
    this.setState({
      like: likeTemp,
    });
  };
  render() {
    return (
      <div className="container">
        <h3>personal profile</h3>
        <Profile like={this.state.like}></Profile>
        <div className="card text-white bg-default">
          <h3 style={{ color: "pink" }}>Danh gia ({this.state.like})</h3>
          <div className="card-body">
            <button
              style={{ color: "red", border: "1px solid red" }}
              onClick={() => {
                this.likeImage();
              }}
              className="btn "
            >
              {" "}
              tha tim
              <FontAwesomeIcon icon={faHeart} />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
