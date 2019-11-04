import React from "react";
import OptimizeContext from "./OptimizeContext";

class Experiment extends React.Component {
  static defaultProps = {
    loader: null,
    timeout: 3000
  };

  state = {
    variant: null
  };

  updateVariant = value => {
    // if experiment not active, render original
    const newVariant = value === undefined || value === null ? "0" : value;
    if(newVariant !== this.state.variant) {
      this.setState({
        variant: newVariant
      });
    }
  };

  updateVariantFromGlobalState = () => {
    const value =
      typeof window !== 'undefined' && window.google_optimize ? window.google_optimize.get(this.props.id) : null;
    this.updateVariant(value);
  };

  componentDidMount() {
    if (!this.props.id) {
      throw new Error("Please specify the experiment id");
    }

    // Delayed init
    if(typeof window !== 'undefined' && !window.google_optimize) {
      if (!window.dataLayer) window.dataLayer = [];
      if (!window.dataLayer.hide)
        window.dataLayer.hide = {
          start: Date.now(),
        };
      const oldHideEnd = window.dataLayer.hide.end;
      const timeout = setTimeout(this.updateVariantFromGlobalState, this.props.timeout);
      window.dataLayer.hide.end = () => {
        clearTimeout(timeout);
        this.updateVariantFromGlobalState();
        if(oldHideEnd) oldHideEnd();
      };

      window.gtag && window.gtag("event", "optimize.callback", {
        name: this.props.id,
        callback: this.updateVariant
      });
    } else {
      // Google Optimize already loaded, or we're doing server-side rendering
      this.updateVariantFromGlobalState();
    }
  }

  componentWillUnmount() {
    typeof window !== 'undefined' && window.gtag && window.gtag("event", "optimize.callback", {
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
