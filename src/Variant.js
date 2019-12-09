import React from "react";
import PropTypes from "prop-types";
import OptimizeContext from "./OptimizeContext";

class Variant extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.node
  };

  render() {
    return (
      <OptimizeContext.Consumer>
        {value => (value === this.props.id ? this.props.children : null)}
      </OptimizeContext.Consumer>
    );
  }
}

export default Variant;
