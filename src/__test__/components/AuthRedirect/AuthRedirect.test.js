import React from "react";
import { mount } from "enzyme"
import withAuthRedirect from "../../../hooks/AuthRedirect/AuthRedirect"

// test specific imports
import Routes from "../../../components/Routes/Routes"
import { Redirect } from 'react-router-dom'
import { WELCOME } from "../../../constants/routeConstants";
import withCustomStore from "../withCustomStore"

const RouteWithRedirect = withAuthRedirect(Routes)

describe("AuthRedirect", () => {
  beforeEach(() => { jest.resetAllMocks() })
  let wrapper;

  it("Redirects from HOME to WELCOME when not authenticated", () => {
    const noAuthStore = { }
    // Pass in the custom store
    wrapper = mount(withCustomStore(<RouteWithRedirect />, noAuthStore))
  
    // Look for the a Redirect component
    const redirectComponent = wrapper.find(Redirect)
    expect(redirectComponent).toBeTruthy()
    expect(redirectComponent.length).toEqual(1)
    expect(redirectComponent.prop("to")).toEqual(WELCOME)
  })

  it("Stays on HOME authenticated", () => {
    const mockAuthStore = { currentUser: { uid: "fakeUserID" }, currentMatches: [] }
    // Pass in the custom store
    wrapper = mount(withCustomStore(<RouteWithRedirect />, mockAuthStore))

    // Make sure it doesn't redirect
    expect(wrapper.find(Redirect).length).toBeFalsy()
  })
})
