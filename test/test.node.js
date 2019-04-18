import "./setup";

import React from "react";
import ReactDOM from "react-dom/server";
import { Variant, Experiment } from "../src";

describe("ssr", () => {
  it("should render without errors", () => {
    const Loader = () => <div>loader</div>;
    const string = ReactDOM.renderToString(
      <Experiment id="abc" loader={<Loader />}>
        <Variant id="0">Original</Variant>
      </Experiment>
    );

    expect(string).to.not.be.empty;
  });
});
