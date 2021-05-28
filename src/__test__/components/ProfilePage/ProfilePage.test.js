import React from "react";
import ProfilePage from "../../../components/ProfilePage/ProfilePage.js"
import { mount } from "enzyme"

// test specific imports
import { act } from "@testing-library/react-hooks"
import mockCurrentUser from "../../mocks/mockCurrentUser"
import withCustomStore from "../withCustomStore"
import AvatarInput from "../../../components/ProfilePage/AvatarInput/AvatarInput"
import Button from "react-bootstrap/Button";

describe("ProfilePage", () => {
  // Assume the user is logged in
  let wrapper = mount(withCustomStore(<ProfilePage />, { currentUser: mockCurrentUser }))

  it("Renders the component", () => {
    expect(wrapper).toBeTruthy()
  })

  it('Calls the logout function from AuthContext', () => {
    const logoutUser = jest.fn();
    const mockStore = { currentUser: {}, logoutUser }
    wrapper = mount(withCustomStore(<ProfilePage />, mockStore))
  
  
    act(() => { wrapper.find(Button).simulate('click', {
      preventDefault: () => {}
    })})

    expect(logoutUser).toHaveBeenCalledTimes(1)
  });

  it('Displays the current user`s profile picture', () => {
    const logoutUser = jest.fn();
    const mockStore = { currentUser: {}, logoutUser }
    wrapper = mount(withCustomStore(<ProfilePage />, mockStore))
    
    const avatarComponent = wrapper.find(AvatarInput)

    expect(avatarComponent).toBeTruthy()
    expect(avatarComponent.length).toEqual(1)
  });

  it('Renders an input for upload a profile picture', () => {
    const mockStore = { currentUser: {} }
    wrapper = mount(withCustomStore(<ProfilePage />, mockStore))
    
    const inputElem = wrapper.find("input")

    expect(inputElem).toBeTruthy()
    expect(inputElem.length).toEqual(1)
  });

  it('Displays current user`s name in a h4 elem', () => {
    const mockStore = { currentUser: mockCurrentUser }
    wrapper = mount(withCustomStore(<ProfilePage />, mockStore))
    
    const displayName = wrapper.find("h4")

    expect(displayName).toBeTruthy()
    expect(displayName.text()).toEqual("John Doe")
  });

  it('Displays current user`s email in a p elem', () => {
    const mockStore = { currentUser: mockCurrentUser }
    wrapper = mount(withCustomStore(<ProfilePage />, mockStore))
    
    const displayName = wrapper.find("p")

    expect(displayName).toBeTruthy()
    expect(displayName.text()).toEqual("johndoe@gmail.com")
  });
})
