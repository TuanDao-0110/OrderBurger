import React, { Component } from "react";
import { connect } from "react-redux";
import { huyGheAction } from "../Redux/reducer/actions/BaiTapDatVeAction";
class ThongTinHangGhe extends Component {
  render() {
    return (
      <div>
        <div className="text-left mt-5">
          <button className="gheDuocChon"></button>
          <span className="text-light" style={{ fontSize: "25px" }}>
            ghế đã đặt
          </span>
          <br></br>
          <button className="gheDangChon"></button>
          <span className="text-light" style={{ fontSize: "25px" }}>
            ghế đang đặt
          </span>
          <br></br>

          <button className="ghe m-0"></button>
          <span className="text-light" style={{ fontSize: "25px" }}>
            ghế chưa đặt{" "}
          </span>
        </div>
        <div className="mt-5">
          <table className="table " border="2">
            <thead>
              <tr className="text-light" style={{ fontSize: "35px" }}>
                <th>số ghế</th>
                <th>giá</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="text-warning">
              {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                return (
                  <tr key={index}>
                    <td> {gheDangDat.soGhe}</td>
                    <td> {gheDangDat.gia}</td>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          this.props.dispatch(huyGheAction(gheDangDat.soGhe));
                        }}
                      >
                        Hủy
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot className="text-danger">
              <tr>
                <td>tổng tiền</td>
                <td>
                  {this.props.danhSachGheDangDat.reduce((tongTien, gheDangDat) => {
                    return (tongTien += gheDangDat.gia);
                  }, 0)}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.BookingTicket.danhSachGheDangDat,
  };
};

export default connect(mapStateToProps)(ThongTinHangGhe);
