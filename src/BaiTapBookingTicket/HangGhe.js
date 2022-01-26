import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { datGheAction } from "../Redux/reducer/actions/BaiTapDatVeAction";
class HangGhe extends Component {
  renderGhe = () => {
    return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
      let cssGheDaDat = "";
      let disabled = false;
      //   trang thai ge da dat roi
      if (ghe.daDat) {
        disabled = true;
        cssGheDaDat = "gheDuocChon";
      }
      // xet trang thai dang dat
      let cssGheDangDat = "";
      let indexGheDangDat = this.props.danhSachGheDangDat.findIndex((gheDangDat) => gheDangDat.soGhe == ghe.soGhe);

      if (indexGheDangDat !== -1) {
        cssGheDangDat = "gheDangChon";
      }
      return (
        <button
          key={index}
          disabled={disabled}
          className={`ghe ${cssGheDaDat} ${cssGheDangDat}`}
          onClick={() => {
            this.props.datGhe(ghe);
          }}
        >
          {ghe.soGhe}
        </button>
      );
    });
  };
  renderSoHang = () => {
    return this.props.hangGhe.danhSachGhe.map((item, index) => {
      return <button className="rowNumber text-center">{index + 1}</button>;
    });
  };
  renderHangGhe = () => {
    if (this.props.soHangGhe === 0) {
      return (
        <div className="ml-3">
          {this.props.hangGhe.hang} {this.renderSoHang()}
        </div>
      );
    } else {
      return (
        <div>
          {this.props.hangGhe.hang} {this.renderGhe()}
        </div>
      );
    }
  };
  render() {
    return (
      <div className="text-light text-left mt-5 ml-5" style={{ fontSize: "20px" }}>
        {this.renderHangGhe()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.BookingTicket.danhSachGheDangDat,
  };
};
const mapDispatchToprops = (dispatch) => {
  return {
    datGhe: (ghe) => {
      dispatch(datGheAction(ghe));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToprops)(HangGhe);
