import React, { Component } from "react";
import { ModelContext } from "../_Context/ModelContext";

export default class ModelStateProvider extends Component {
  state = {
    like: 2,
  };
  setLike = () => {
    this.setState({
      // eslint-disable-next-line react/no-direct-mutation-state
      like: this.state.like + 1,
    });
  };
  // sử dụng ModelContext để chia sẽ cho các component children
  render() {
    return (
      <ModelContext.Provider value={{ stateLike: this.state.like, setLike: this.setLike }}>
        {/* phạm vi  sử dụng context  */}

        {this.props.children}
      </ModelContext.Provider>
    );
  }
}
