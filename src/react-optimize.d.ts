declare module "react-optimize" {

// Type definitions for react-optimize v1.0.2
// Project: https://github.com/hudovisk/react-optimize
// Definitions by: Alex Hughes <https://github.com/alxhghs>
// TypeScript Version: 3.3.3333

import React from "react";

export type ExperimentProps = {
    children: React.ReactNode;
    id: string;
}
export class Experiment extends React.Component<ExperimentProps> {}
export type VariantProps = {
    children: React.ReactNode;
    id: string;
}
export class Variant extends React.Component<VariantProps> {}

}
