import React from "react";
import { mount } from "enzyme";
import { Variant } from "../../src";
import OptimizeContext from "../../src/OptimizeContext";

describe("variant", () => {
  it("should render on correct id", () => {
    const Variant1 = () => <div>variant1</div>;
    const Variant2 = () => <div>variant2</div>;

    const wrapper = mount(
      <>
        <Variant id="1">
          <Variant1 />
        </Variant>
        <Variant id="2">
          <Variant2 />
        </Variant>
      </>,
      {
        wrappingComponent: OptimizeContext.Provider,
        wrappingComponentProps: { value: "1" }
      }
    );

    expect(wrapper.find(Variant1)).to.have.lengthOf(1);
    expect(wrapper.find(Variant2)).to.have.lengthOf(0);
  });
});
