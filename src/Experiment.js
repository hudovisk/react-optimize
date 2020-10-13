import React from "react";
import PropTypes from "prop-types";
import OptimizeContext from "./OptimizeContext";

class Experiment extends React.Component {
  static defaultProps = {
    loader: null,
    timeout: 3000,
  };

  static propTypes = {
    id: PropTypes.string.isRequired,
    loader: PropTypes.node,
    timeout: PropTypes.number,
    children: PropTypes.node,
  };

  state = {
    variant: null,
  };

  updateVariantTimeout = null;

  updateVariant = (value) => {
    clearTimeout(this.updateVariantTimeout);
    // if experiment not active, render original
    const newVariant = value === undefined || value === null ? "0" : value;
    if (newVariant !== this.state.variant) {
      this.setState({
        variant: newVariant,
      });
    }
  };

  updateVariantFromGlobalState = () => {
    const value =
      typeof window !== "undefined" && window.google_optimize
        ? window.google_optimize.get(this.props.id)
        : null;
    this.updateVariant(value);
  };

  setupOptimizeCallback = () => {
    this.updateVariantTimeout = setTimeout(
      this.updateVariantFromGlobalState,
      this.props.timeout
    );
    const oldHideEnd = window.dataLayer.hide.end;
    window.dataLayer.hide.end = () => {
      this.updateVariantFromGlobalState();
      oldHideEnd && oldHideEnd();
    };

    window.gtag &&
      window.gtag("event", "optimize.callback", {
        name: this.props.id,
        callback: this.updateVariant,
      });
  };

  componentDidMount() {
    if (!this.props.id) {
      throw new Error("Please specify the experiment id");
    }

    // Delayed init
    if (typeof window !== "undefined" && !window.google_optimize) {
      if (!window.dataLayer) {
        window.dataLayer = [];
      }
      if (!window.dataLayer.hide) {
        window.dataLayer.hide = { start: Date.now() };
      }

      this.setupOptimizeCallback();
    } else {
      // Google Optimize already loaded, or we're doing server-side rendering
      this.updateVariantFromGlobalState();
    }
  }

  componentWillUnmount() {
    clearTimeout(this.updateVariantTimeout);
    typeof window !== "undefined" &&
      window.gtag &&
      window.gtag("event", "optimize.callback", {
        name: this.props.id,
        callback: this.updateVariant,
        remove: true,
      });
  }

  render() {
    return (
      <OptimizeContext.Provider value={this.state.variant}>
        {this.state.variant === null ? this.props.loader : this.props.children}
      </OptimizeContext.Provider>
    );
  }
}

export default Experiment;
