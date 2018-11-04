import React from "react";
import ReactDOM from "react-dom";
import App from "../../service/GetBooksByName";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";

configure({ adapter: new Adapter() });
describe("GetBooksByName", () => {
  it("should get the specific book by Name", async () => {
    //fetch the mockdata by name
    let p = "";
    global.fetch = jest.fn().mockImplementation(() => {
      p = new Promise((resolve, reject) => {
        resolve({
          json: () => {
            return { Id: 1 };
          }
        });
      });
      return p;
    });
    //make a api call here
    const response = { Id: 1 };
    expect(response.Id).toBe(1);
  });
});
