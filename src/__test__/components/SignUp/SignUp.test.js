import React from "react";
import SignUp from "../../../components/SignUp/SignUp"
import { mount } from "enzyme"

// test specific imports
import { LOGIN } from "../../../constants/routeConstants"
import { Link } from "react-router-dom"
import Form, { Control } from "react-bootstrap/Form";
import { act } from "@testing-library/react-hooks"
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

describe("SignUp", () => {
  beforeEach(() => { jest.resetAllMocks() })
  let wrapper = mount(withCustomStore(<SignUp />, {}))

  it("Renders name input first", () => {
    const nameInput = wrapper.find(Control).first()
    expect(nameInput).toBeTruthy()
    expect(nameInput.props().type).toEqual("name")
  })

  it("Renders email input second", () => {
    const emailInput = wrapper.find(Control).at(1)
    expect(emailInput).toBeTruthy()
    expect(emailInput.props().type).toEqual("email")
  })

  it("Renders password input third", () => {
    const passwordInput = wrapper.find(Control).at(2)
    expect(passwordInput).toBeTruthy()
    expect(passwordInput.props().type).toEqual("password")
  })

  it("Renders validate password input third", () => {
    const passwordInput = wrapper.find(Control).at(3)
    expect(passwordInput).toBeTruthy()
    expect(passwordInput.props().type).toEqual("password")
  })

  it("Saves email to state through input", () => {
    const updatedEmailInput = simulateChangeOnInput(wrapper, "FormControl[type='email']", "test@test.com")
    expect(updatedEmailInput).toBeTruthy()
    expect(updatedEmailInput.props().value).toEqual("test@test.com")
  })

  it("Saves password to state through input", () => {
    const updatedPasswordInput = simulateChangeOnInput(wrapper, "FormControl#password", "password123")
    expect(updatedPasswordInput).toBeTruthy()
    expect(updatedPasswordInput.props().value).toEqual("password123")
  })

  it("Saves validation password to state through input", () => {
    const updatedValidatePasswordInput = simulateChangeOnInput(wrapper, "FormControl#validate-password", "password123")
    expect(updatedValidatePasswordInput).toBeTruthy()
    expect(updatedValidatePasswordInput.props().value).toEqual("password123")
  })

  it("Renders log-in redirect link", () => {
    wrapper = mount(withCustomStore(<SignUp />, {}))
    const loginLink = wrapper.find(Link).first()
    expect(loginLink.props().to).toBe(LOGIN)
  })

  it('Calls the signup function from AuthContext when valid data is entered', () => {
    const signupUser = jest.fn();
    const mockStore = { currentUser: null, signupUser }
    let wrapper = mount(withCustomStore(<SignUp />, mockStore))

    simulateChangeOnInput(wrapper, "FormControl[type='email']", "test@test.com")
    simulateChangeOnInput(wrapper, "FormControl#password", "password123")
    simulateChangeOnInput(wrapper, "FormControl#validate-password", "password123")

    act(() => { wrapper.find(Form).simulate('submit', {
      preventDefault: () => {}
    })})

    expect(signupUser).toHaveBeenCalledTimes(1)
  });

  it('Calls nothing when invalid data is entered', async () => {
    const signupUser = jest.fn();
    const mockStore = { currentUser: null, signupUser }
    let wrapper = mount(withCustomStore(<SignUp />, mockStore))
  
    simulateChangeOnInput(wrapper, "FormControl[type='email']", "test@test.com")
    simulateChangeOnInput(wrapper, "FormControl#password", "short")
    simulateChangeOnInput(wrapper, "FormControl#validate-password", "short")

    act(() => { wrapper.find(Form).simulate('submit', {
      preventDefault: () => {}
    })})

    expect(signupUser).toHaveBeenCalledTimes(0)
  });

  it("Redirects to HOME if logged in", () => {
    const mockAuthStore = { currentUser: { uid: "fakeUserID" } }
    // Pass in the custom store
    wrapper = mount(withCustomStore(<SignUp />, mockAuthStore))

    // Look for the a Redirect component
    const redirectComponent = wrapper.find(Redirect)
    expect(redirectComponent).toBeTruthy()
    expect(redirectComponent.length).toEqual(1)
    expect(redirectComponent.prop("to")).toEqual(HOME)
  })

  it("No redirect nobody is authenticated", () => {
    const noAuthStore = {}
    // Pass in the custom store
    wrapper = mount(withCustomStore(<SignUp />, noAuthStore))

    // Make sure it doesn't redirect
    expect(wrapper.find(Redirect).length).toBeFalsy()
  })
})