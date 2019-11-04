declare module 'react-optimize' {
  import { ComponentType, ReactNode } from 'react';
  interface ExperimentProps {
    children: ReactNode;
    id: string;
    loader?: ReactNode;
    timeout?: number;
  }

  const Experiment: ComponentType<ExperimentProps>;

  interface VariantProps {
    children: ReactNode;
    id: string;
  }
  const Variant: ComponentType<VariantProps>;
}
