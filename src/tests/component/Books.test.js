import * as React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import Books from "../../component/Books";

configure({ adapter: new Adapter() });
describe("Books", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Books />);
  });
  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(3);
  });
  it("should render <h1>", () => {
    expect(wrapper.find("h1").length).toEqual(1);
  });
});
