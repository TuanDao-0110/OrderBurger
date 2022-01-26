import React, { Component } from "react";
import "./BaiTapBurger.css";
import Buger from "./Buger";
import OrderBurger from "./OrderBurger";
export default class BaiTapBurger extends Component {
  render() {
    return (
      <div className="container main">
        <h2> order burger's excercise</h2>
        <div className="row">

        <Buger></Buger>
        <OrderBurger></OrderBurger>
        </div>
      </div>
    );
  }
}
