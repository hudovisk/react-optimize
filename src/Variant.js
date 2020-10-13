import React from "react";
import PropTypes from "prop-types";
import OptimizeContext from "./OptimizeContext";

class Variant extends React.Component {
  render() {
    return (
      <OptimizeContext.Consumer>
        {(value) => (value === this.props.id ? this.props.children : null)}
      </OptimizeContext.Consumer>
    );
  }
}

Variant.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Variant;
