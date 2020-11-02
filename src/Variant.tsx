import React from "react";
import OptimizeContext from "./OptimizeContext";

interface VariantProps {
  id: string;
  children?: React.ReactNode
}

class Variant extends React.Component<VariantProps> {
  render() {
    return (
      <OptimizeContext.Consumer>
        {(value) => (value === this.props.id ? this.props.children : null)}
      </OptimizeContext.Consumer>
    );
  }
}

export default Variant;
