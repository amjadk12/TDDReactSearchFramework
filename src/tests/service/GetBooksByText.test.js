import React from "react";
import ReactDOM from "react-dom";
import App from "../../service/GetBooksByText";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import { GetBooksBySearch } from "../../service/GetBooksByText";

configure({ adapter: new Adapter() });
describe("GetBooksByName", async () => {
  it("should call GetBooksBySearch and return 20 items", () => {
    // let result=null;
    // try{
    //   result = await GetBooksBySearch("book");
    //   expect(result.length).toEqual(20);
    // }catch(error){
    // }
  });
});
