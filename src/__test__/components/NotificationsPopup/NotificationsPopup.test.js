import React from "react";
import NotificationsPopup from "../../../components/NotificationsPopup/NotificationsPopup"
import { shallow } from "enzyme"

// test specific imports
import ReactNotification from 'react-notifications-component'
import MockWrapper from "../MockWrapper"

describe("Login", () => {
  let wrapper = shallow(
    <MockWrapper>
      <NotificationsPopup />
    </MockWrapper>
  );

  it("Renders without crashing", () => {
    expect(wrapper).toBeTruthy();
  })

  it("Renders ReactNotification component", () => {
    expect(wrapper.find(ReactNotification)).toBeTruthy();
  })
})
