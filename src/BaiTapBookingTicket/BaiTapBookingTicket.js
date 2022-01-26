import React, { Component, Fragment } from "react";
import "./BaiTapBookingTicket.css";
import ThongTinHangGhe from "./ThongTinHangGhe";
import data from "../data/danhSachGhe.json";
import HangGhe from "./HangGhe";
export default class BaiTapBookingTicket extends Component {
  renderHangGhe = () => {
    return data.map((hangGe, index) => {
      return (
        <Fragment key={{ index }}>
          <HangGhe hangGhe={hangGe} soHangGhe={index} />
        </Fragment>
      );
    });
  };
  render() {
    return (
      <div className="main bookingMovie">
        <div className="cover">
          <div className="container-fluid">
            <div className="row">
              <div className="col-8">
                <h1 className="text-light">bài tập đặt vé cyberlear.vn</h1>
                <div className="manHinh text-light">màn hinh</div>
                <div className="d-flex upScreen">
                  <div className="screen"></div>
                </div>
                {this.renderHangGhe()}
              </div>
              <div className="col-4">
                <h1 style={{ fontSize: "25px" }} className="text-warning mt-5">
                  danh sách ghế bạn chọn
                </h1>
                <ThongTinHangGhe />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
