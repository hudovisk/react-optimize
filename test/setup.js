import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import chai from "chai";

Enzyme.configure({ adapter: new Adapter() });

// ----------------------------------------
// Chai
// ----------------------------------------
global.expect = chai.expect;
