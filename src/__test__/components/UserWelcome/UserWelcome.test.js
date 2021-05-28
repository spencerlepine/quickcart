import React from "react";
import UserWelcome from "../../../components/UserWelcome/UserWelcome"
import { mount } from "enzyme"

// test specific imports
import { LOGIN, SIGNUP } from "../../../constants/routeConstants"
import { Link } from "react-router-dom"
import withCustomStore from "../withCustomStore"
import { Redirect } from 'react-router-dom'
import { HOME } from "../../../constants/routeConstants";

describe("UserWelcome", () => {
  let wrapper = mount(withCustomStore(<UserWelcome />, {}))

  it("Renders link to log-in page first", () => {
    const firstLink = wrapper.find(Link).at(0)
    expect(firstLink).toBeTruthy()
    expect(firstLink.props().to).toBe(LOGIN)
  })

  it("Renders link to sign-up page second", () => {
    const secondLink = wrapper.find(Link).at(1)
    expect(secondLink).toBeTruthy()
    expect(secondLink.props().to).toBe(SIGNUP)
  })

  it("Redirects to HOME if logged in", () => {
    const mockAuthStore = { currentUser: { uid: "fakeUserID" } }
    // Pass in the custom store
    wrapper = mount(withCustomStore(<UserWelcome />, mockAuthStore))

    // Look for the a Redirect component
    const redirectComponent = wrapper.find(Redirect)
    expect(redirectComponent).toBeTruthy()
    expect(redirectComponent.length).toEqual(1)
    expect(redirectComponent.prop("to")).toEqual(HOME)
  })

  it("No redirect nobody is authenticated", () => {
    const noAuthStore = {}
    // Pass in the custom store
    wrapper = mount(withCustomStore(<UserWelcome />, noAuthStore))

    // Make sure it doesn't redirect
    expect(wrapper.find(Redirect).length).toBeFalsy()
  })
})
