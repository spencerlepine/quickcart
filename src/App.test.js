import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App component", () => {
  it("should render correctly with no errors", () => {
    const component = shallow(<App />);
    expect(component).toBeTruthy();
  });
});
