import React from "react";
import createReactContext from "create-react-context";

const OptimizeContext = createReactContext();

export class Experiment extends React.Component {
  state = {
    variant: null
  };

  updateVariant = value => {
    // if experiment not active, render original
    this.setState({ variant: value === undefined ? "0" : value });
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
    const hideEnd = window.dataLayer.hide.end;
    if (hideEnd) {
      window.dataLayer.hide.end = () => {
        this.delayedInitialization();
        hideEnd();
      };
    } else {
      this.delayedInitialization();
    }

    gtag("event", "optimize.callback", {
      name: this.props.id,
      callback: this.updateVariant
    });
  }

  componentWillUnmount() {
    gtag("event", "optimize.callback", {
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

export class Variant extends React.Component {
  static contextType = OptimizeContext;

  render() {
    if (this.context !== this.props.id) {
      return null;
    }

    return this.props.children;
  }
}

export default {
  Experiment,
  Variant
};
