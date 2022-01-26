import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

class Buger extends Component {
  danhSachOrder = this.props.stateDanhSachBurger;
  renderSalad = () => {
    let tempArray = [];
    let i = 0;

    while (i < this.danhSachOrder[0].amount) {
      i++;
      tempArray.push(i);
    }
    return tempArray.map((item, index) => {
      return <div className="salad" key={`${item.name}${index}`}></div>;
    });
  };
  renderBreef = () => {
    let tempArray = [];
    let i = 0;
    while (i < this.danhSachOrder[2].amount) {
      i++;
      tempArray.push(i);
    }
    return tempArray.map((item, index) => {
      return <div className="beef" key={`${item.name}${index}`}></div>;
    });
  };
  renderCheese = () => {
    let tempArray = [];
    let i = 0;
    while (i < this.danhSachOrder[1].amount) {
      i++;
      tempArray.push(i);
    }
    return tempArray.map((item, index) => {
      return <div className="cheese" key={`${item.name}${index}`}></div>;
    });
  };
  render() {
    return (
      <div className="col-7">
        <h2>Your burger </h2>
        <div className="breadTop"></div>
        {this.renderSalad()}

        {this.renderCheese()}
        {this.renderBreef()}

        <div className="breadBottom"></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    stateDanhSachBurger: state.BaiTapBurger.danhSachBurger,
  };
};
export default connect(mapStateToProps)(Buger);
