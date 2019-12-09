import React from "react";
import PropTypes from "prop-types";
import OptimizeContext from "./OptimizeContext";

class Experiment extends React.Component {
  static defaultProps = {
    loader: null
  };

  static propTypes = {
    id: PropTypes.string.isRequired,
    loader: PropTypes.node,
    children: PropTypes.node
  };

  state = {
    variant: null
  };

  updateVariant = value => {
    // if experiment not active, render original
    this.setState({
      variant: value === undefined || value === null ? "0" : value
    });
  };

  delayedInitialization = () => {
    const value =
      window.google_optimize && window.google_optimize.get(this.props.id);
    this.updateVariant(value);
  };

  componentDidMount() {
    if (!this.props.id) {
      throw new Error("Please specify the experiment id");
    }

    // Delayed init
    const hideEnd =
      window.dataLayer && window.dataLayer.hide && window.dataLayer.hide.end;
    if (hideEnd) {
      window.dataLayer.hide.end = () => {
        this.delayedInitialization();
        hideEnd();
      };
    } else {
      this.delayedInitialization();
    }

    window.gtag && window.gtag("event", "optimize.callback", {
      name: this.props.id,
      callback: this.updateVariant
    });
  }

  componentWillUnmount() {
    window.gtag && window.gtag("event", "optimize.callback", {
      name: this.props.id,
      callback: this.updateVariant,
      remove: true
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