import { type } from "@testing-library/user-event/dist/type";
import React, { Component } from "react";
import { connect } from "react-redux";
import { tangGiamSoLuong } from "./Action/tangGiamSoLuong";
class OrderBurger extends Component {
  renderOrder = () => {
    return this.props.stateBurger.danhSachBurger.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.name}</td>
          <td>
            <button
              onClick={() => {
                this.props.tangGiamOrder("add", item.name);
              }}
              className="btn btn-success"
            >
              +
            </button>{" "}
            <span className="orderAmount">{item.amount.toLocaleString()}</span>
            <button
              onClick={() => {
                this.props.tangGiamOrder("remove", item.name);
              }}
              className="btn btn-danger"
            >
              -
            </button>
          </td>
          <td>$ {item.price.toLocaleString()}</td>
          <td>$ {(item.price * item.amount).toLocaleString()}</td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="col-5">
        <h2>Choose food</h2>
        <table className="table">
          <thead>
            <tr>
              <th>food</th>
              <th></th>
              <th>price</th>
              <th>total</th>
            </tr>
          </thead>
          <tbody>{this.renderOrder()}</tbody>
          <tr>
            <td></td>
            <td></td>
            <td>Sum</td>
            <td>{this.props.stateBurger.sum}</td>
          </tr>
        </table>
      </div>
    );
  }
}

const mapDispatchToprops = (dispatch) => {
  return {
    tangGiamOrder: (pick, name) => {
      dispatch(tangGiamSoLuong(pick, name));
    },
  };
};
const mapStateTopProps = (state) => {
  return {
    stateBurger: state.BaiTapBurger,
  };
};
export default connect(mapStateTopProps, mapDispatchToprops)(OrderBurger);
