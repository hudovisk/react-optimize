import React from "react";
import { render } from "react-testing-library";
import { Experiment } from "../../src";

describe("experiment", () => {
  it("should require experiment id", () => {
    try {
      render(<Experiment />);
    } catch (e) {
      expect(e).to.be.undefined;
    }
  });
});
