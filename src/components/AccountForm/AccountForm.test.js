import React from "react";
import { shallow } from "enzyme";
import _ from "./_";

describe("_", () => {
  it("should render correctly with no errors", () => {
    const component = shallow(<_ />);
    expect(component).toBeTruthy();
  });
});
