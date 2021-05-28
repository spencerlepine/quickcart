import React from "react";
import LogIn from "../../../components/LogIn/LogIn"
import { mount } from "enzyme"

// test specific imports
import { SIGNUP } from "../../../constants/routeConstants"
import { Link } from "react-router-dom"
import { act } from "@testing-library/react-hooks"
import Form, { Control } from "react-bootstrap/Form";
import withCustomStore from "../withCustomStore"
import { Redirect } from 'react-router-dom'
import { HOME } from "../../../constants/routeConstants";

const simulateChangeOnInput = (wrapper, inputSelector, newValue) => {
  const input = wrapper.find(inputSelector)
  act(() => {
    input.simulate('change', {
    target: { name: 'name' , value: newValue },
  })})
  return wrapper.find(inputSelector)
}

describe("Login", () => {
  beforeEach(() => { jest.resetAllMocks() })
  let wrapper = mount(withCustomStore(<LogIn />, {}))

  it("Renders without crashing", () => {
    expect(wrapper.find(".LogIn")).toBeTruthy();
  })
  
  it("Renders email input first", () => {
    const emailInput = wrapper.find(Control).first()
    expect(emailInput).toBeTruthy()
    expect(emailInput.props().type).toEqual("email")
  })

  it("Renders password input second", () => {
    const passwordInput = wrapper.find(Control).at(1)
    expect(passwordInput).toBeTruthy()
    expect(passwordInput.props().type).toEqual("password")
  })

  it("Saves email to state through input", () => {
    const updatedEmailInput = simulateChangeOnInput(wrapper, "FormControl[type='email']", "test@test.com")
    expect(updatedEmailInput).toBeTruthy()
    expect(updatedEmailInput.props().value).toEqual("test@test.com")
  })

  it("Saves password to state through input", () => {
    const updatedPasswordInput = simulateChangeOnInput(wrapper, "FormControl[type='password']", "password123")
    expect(updatedPasswordInput).toBeTruthy()
    expect(updatedPasswordInput.props().value).toEqual("password123")
  })

  it("Renders sign-up redirect link", () => {
    const signLink = wrapper.find(Link).first()
    expect(signLink.props().to).toBe(SIGNUP)
  })

  it('Calls the login function from AuthContext when valid data is entered', () => {
    const loginUser = jest.fn();
    const mockStore = { currentUser: null, loginUser }
    wrapper = mount(withCustomStore(<LogIn />, mockStore))
  
    simulateChangeOnInput(wrapper, "FormControl[type='email']", "test@test.com")
    simulateChangeOnInput(wrapper, "FormControl[type='password']", "password123")
    act(() => { wrapper.find(Form).simulate('submit', {
      preventDefault: () => {}
    })})

    expect(loginUser).toHaveBeenCalledTimes(1)
  });

  it('Calls nothing when invalid data is entered', () => {
    const loginUser = jest.fn();
    const mockStore = { currentUser: null, loginUser }
    wrapper = mount(withCustomStore(<LogIn />, mockStore))
  
    simulateChangeOnInput(wrapper, "FormControl[type='email']", "short")
    simulateChangeOnInput(wrapper, "FormControl[type='password']", "short")

    act(() => { wrapper.find(Form).simulate('submit', {
      preventDefault: () => {}
    })})

    expect(loginUser).toHaveBeenCalledTimes(0)
  });

  it("Redirects to HOME if logged in", () => {
    const mockAuthStore = { currentUser: { uid: "fakeUserID" } }
    // Pass in the custom store
    wrapper = mount(withCustomStore(<LogIn />, mockAuthStore))

    // Look for the a Redirect component
    const redirectComponent = wrapper.find(Redirect)
    expect(redirectComponent).toBeTruthy()
    expect(redirectComponent.length).toEqual(1)
    expect(redirectComponent.prop("to")).toEqual(HOME)
  })

  it("No redirect nobody is authenticated", () => {
    const noAuthStore = {}
    // Pass in the custom store
    wrapper = mount(withCustomStore(<LogIn />, noAuthStore))

    // Make sure it doesn't redirect
    expect(wrapper.find(Redirect).length).toBeFalsy()
  })
})



