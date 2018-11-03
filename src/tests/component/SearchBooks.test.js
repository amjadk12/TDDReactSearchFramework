import * as React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import SearchBooks from "../../component/SearchBooks";

configure({ adapter: new Adapter() });
describe("SearchBooks", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SearchBooks />);
  });
  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });
  it("should render a <input />", () => {
    expect(wrapper.find("input").length).toEqual(1);
  });
});
