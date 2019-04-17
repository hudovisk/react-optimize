import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import chai from "chai";

Enzyme.configure({ adapter: new Adapter() });

// ----------------------------------------
// Mocha
// ----------------------------------------
mocha.setup({
  ui: "bdd"
});

// ----------------------------------------
// Chai
// ----------------------------------------
global.expect = chai.expect;
