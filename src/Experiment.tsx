import React from "react";
import OptimizeContext from "./OptimizeContext";

interface ExperimentProps {
  id: string;
  loader?: React.ReactNode;
  timeout?: number;
  children?: React.ReactNode;
  asMtvExperiment?: boolean;
  indexSectionPosition?: number;
}

interface ExperimentState {
  variant: string | null;
}

class Experiment extends React.Component<ExperimentProps, ExperimentState> {
  static defaultProps: Partial<ExperimentProps> = {
    loader: null,
    timeout: 3000,
    asMtvExperiment: false,
  };

  state: ExperimentState = {
    variant: null,
  };

  updateVariantTimeout: NodeJS.Timeout | null = null;

  updateVariant = (value?: string) => {
    clearTimeout(this.updateVariantTimeout);
    // if experiment not active, render original
    const newVariant = value === undefined || value === null ? "0" : value;
    if (newVariant !== this.state.variant) {
      this.setState({
        variant: newVariant,
      });
    }
  };

  applyMtvExperiment = (value: string) => {
    const sections = value.split("-");
    const variant = sections[this.props.indexSectionPosition];
    this.updateVariant(variant);
  };

  updateVariantFromGlobalState = () => {
    const googleOptimizeExperimentValue =
      typeof window !== "undefined" && window.google_optimize
        ? window.google_optimize.get(this.props.id)
        : null;
    const isAMtvExperiment =
      this.props.asMtvExperiment && googleOptimizeExperimentValue;

    if (isAMtvExperiment) {
      this.applyMtvExperiment(googleOptimizeExperimentValue);
    } else {
      this.updateVariant(googleOptimizeExperimentValue);
    }
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
