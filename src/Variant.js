import React from "react";
import OptimizeContext from "./OptimizeContext";

class Variant extends React.Component {
  render() {
    return (
      <OptimizeContext.Consumer>
        {value => (value === this.props.id ? this.props.children : null)}
      </OptimizeContext.Consumer>
    );
  }
}

export default Variant;
