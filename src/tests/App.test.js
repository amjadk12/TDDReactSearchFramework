import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import Home from "../Screens/Home";

configure({ adapter: new Adapter() });
describe("App", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render a <Home />", () => {
    expect(wrapper.find("Home").length).toEqual(1);
  });
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
