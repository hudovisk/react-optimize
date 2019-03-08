import React from "react";

declare module "react-optimize" {
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
