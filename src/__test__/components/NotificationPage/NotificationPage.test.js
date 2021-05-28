import React from "react";
import NotificationPage from "../../../components/NotificationPage/NotificationPage.js"

// test specific imports
import mockCurrentUser from "../../mocks/mockCurrentUser"
import withCustomStore from "../withCustomStore"

describe("NotificationPage", () => {
  // Assume the user is logged in
  let wrapper = withCustomStore(<NotificationPage />, { currentUser: mockCurrentUser })

  it("Renders the component", () => {
    expect(wrapper).toBeTruthy()
  })
})
