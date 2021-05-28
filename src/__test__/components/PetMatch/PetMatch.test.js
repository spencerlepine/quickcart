import React from "react";
import PetMatch from "../../../components/PetMatch/PetMatch"
// import { mount } from "enzyme"

import mockCurrentUser from "../../mocks/mockCurrentUser"
import withCustomStore from "../withCustomStore"

describe("PetMatch", () => {
  // Assume the user is logged in
let wrapper = withCustomStore(<PetMatch />, { currentUser: mockCurrentUser })

  it("Renders the component", () => {
    expect(wrapper).toBeTruthy()
  })
})
