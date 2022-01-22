/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import "./buble.css";
import { connect } from "react-redux";
import "animate.css";
class OanhTuTi extends Component {
  render() {
    let item = this.props.stateOanhTuTi;

    let thucHienLuaChon = () => {
      return item.luaChon.map((itemLuaChon, index) => {
        return (
          <div
            className="item_pick"
            id="item-pick"
            key={index - 1}
            onClick={(e) => {
              this.props.clickToChose(index);
              let listActive = document.querySelector(".active");
              if (listActive) {
                document.querySelector(".active").classList.remove("active");
              }
              e.target.classList.add("active");
            }}
          >
            <img src={itemLuaChon.source} className="luaChon"></img>
          </div>
        );
      });
    };

    return (
      <div className="main">
        <div className="cover">
          <div className="row ">
            <div className="col-3 col-left">
              <div className="picture-left">
                <div className="speech-bubble">
                  <img src={item.luaChon[item.nguoiChoiPick].source} style={{ width: "50px", height: "100px" }}></img>
                </div>
                <img src="./img/oanhTuTi/player.png" className="actor "></img>
              </div>

              <div className="d-flex btn_chose mt-0">{thucHienLuaChon()}</div>
            </div>
            <div className="col-6 col-mid">
              <h1> {item.ketqua}</h1>
              <h1 className="content">
                Số bàn thắng: <span>{item.banThang}</span>
              </h1>
              <h1 className="content ">
                số bàn chơi: <span>{item.banChoi}</span>
              </h1>
              <button
                className="play"
                onClick={() => {
                  this.props.clickToPlay();
                }}
              >
                play game
              </button>
            </div>
            <div className="col-3 col-left">
              <div className="picture-left">
                <div key={Math.random() * 1} className="speech-bubble animate__animated animate__bounceIn">
                  <img className="" src={item.luaChon[item.pcPick].source} style={{ width: "50px", height: "100px" }}></img>
                </div>
                <img src="./img/oanhTuTi/playerComputer.png" className="actor"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    stateOanhTuTi: state.BaiTapOanhTuTi,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    clickToChose: (choose) => {
      dispatch({
        type: "Lua_Chon",
        choose,
      });
    },
    clickToPlay: () => {
      let ranDomPcPick = Math.floor(Math.random() * 3);
      dispatch({
        type: "PC_Lua_Chon",
        ranDomPcPick,
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(OanhTuTi);
