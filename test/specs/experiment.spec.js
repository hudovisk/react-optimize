import React from "react";
import { shallow } from "enzyme";
import sinon from "sinon";
import { Experiment } from "../../src";

describe("experiment", () => {
  afterEach(() => {
    delete window.google_optimize;
    delete window.dataLayer;
  });

  it("should require experiment id", () => {
    expect(() => shallow(<Experiment />)).to.throw();
  });

  describe("on optimize already loaded", () => {
    it("should render original variant on experiment not active", () => {
      window.google_optimize = { get: sinon.stub().returns(null) };

      const wrapper = shallow(<Experiment id="abc" />);

      expect(wrapper.state("variant")).to.be.equal("0");
    });

    it("should get variant", () => {
      window.google_optimize = { get: sinon.stub().returns("2") };

      const wrapper = shallow(<Experiment id="abc" />);

      expect(window.google_optimize.get.calledWith("abc")).to.be.true;
      expect(wrapper.state("variant")).to.be.equal("2");

      delete window.google_optimize;
    });

    it("should get multivariante test variants", () => {
      window.google_optimize = { get: sinon.stub().returns("1-2-1") };

      const wrapper = shallow(
        <Experiment asMtvExperiment indexSectionPosition="0" id="abc" />
      );

      expect(window.google_optimize.get.calledWith("abc")).to.be.true;
      expect(wrapper.state("variant")).to.be.equal("1");

      delete window.google_optimize;
    });
  });

  describe("on optimize not loaded yet", () => {
    it("should render loader", () => {
      delete window.dataLayer;
      const Loader = () => <div>loader</div>;
      const wrapper = shallow(<Experiment id="abc" loader={<Loader />} />);

      expect(wrapper.find(Loader)).to.have.lengthOf(1);
    });

    it("should update variant after optimize is loaded", () => {
      delete window.dataLayer;
      const wrapper = shallow(<Experiment id="abc" />);

      expect(wrapper.state("variant")).to.be.equal(null);

      // Load google optimize
      window.google_optimize = { get: sinon.stub().returns("2") };
      window.dataLayer.hide.end();

      expect(wrapper.state("variant")).to.be.equal("2");
    });

    it("should not update variant after optimize is loaded if component was unmounted", () => {
      delete window.dataLayer;
      const wrapper = shallow(<Experiment id="abc" />);

      expect(wrapper.state("variant")).to.be.equal(null);

      wrapper.unmount();
      // Load google optimize
      window.google_optimize = { get: sinon.stub().returns("2") };

      // If component state is updated while component is unmounted, this call will crash
      window.dataLayer.hide.end();
    });
  });
});
