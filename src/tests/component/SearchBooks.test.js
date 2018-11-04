import * as React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure, mount } from "enzyme";
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
  it("should render a <button />", () => {
    expect(wrapper.find("button").length).toEqual(1);
  });
  it("should render a <button />", () => {
    expect(wrapper.find("button.search").text()).toEqual("Search");
  });
  it("should call onChange prop with input value", () => {
    const onSearchMock = jest.fn();
    const wrapper = mount(
      <input className="mockInput" onChange={onSearchMock} value="jungle" />
    );
    wrapper.find("input").simulate("change", "test");
    expect(wrapper.find("input.mockInput").props().value).toEqual("jungle");
  });
});
