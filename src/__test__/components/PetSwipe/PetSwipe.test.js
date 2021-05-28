import React from "react";
import PetSwipe from "../../../components/PetSwipe/PetSwipe"
import { mount } from "enzyme"

// test specific imports
import TinderCard from 'react-tinder-card'
import mockCurrentUser from "../../mocks/mockCurrentUser"
import withCustomStore from "../withCustomStore.js"
import { act } from "@testing-library/react-hooks"

describe("PetSwipe", () => {
  const CustomStore = withCustomStore(<PetSwipe />, { currentUser: mockCurrentUser, currentMatches: [] })
  let wrapper = mount(CustomStore)

  it("Renders the component", () => {
    expect(wrapper).toBeTruthy()
  })

  it("Renders the TinderCard Component", () => {
    const tinderCardComponent = wrapper.find(TinderCard)

    expect(tinderCardComponent).toBeTruthy()
    expect(tinderCardComponent.length).toEqual(1)
  })

  it("Displays two buttons second", () => {
    const swipeButtons = wrapper.find("button")

    expect(swipeButtons.length).toEqual(2)
  })
  
  it("Calls swipeCurrentUser when left button clicked", () => {
    // Arrange
    const swipeCurrentUser = jest.fn();
    const mockStore = { currentUser: mockCurrentUser, swipeCurrentUser, currentMatches: [] }

    // Act
    const CustomStore = withCustomStore(<PetSwipe />, mockStore)
    let wrapper = mount(CustomStore)
    
    const leftButton = wrapper.find("button").at(0)  
    expect(leftButton).toBeTruthy()

    act(() => { leftButton.simulate('click', {
      preventDefault: () => {}
    })})

    // Assert
    expect(swipeCurrentUser).toHaveBeenCalledTimes(1)
  })

  it("Calls swipeCurrentUser when right button clicked", () => {
    // Arrange
    const swipeCurrentUser = jest.fn();
    const mockStore = { currentUser: mockCurrentUser, swipeCurrentUser, currentMatches: [] }

    // Act
    const CustomStore = withCustomStore(<PetSwipe />, mockStore)
    let wrapper = mount(CustomStore)
    
    const rightButton = wrapper.find("button").at(0)  
    expect(rightButton).toBeTruthy()

    act(() => { rightButton.simulate('click', {
      preventDefault: () => {}
    })})

    // Assert
    expect(swipeCurrentUser).toHaveBeenCalledTimes(1)
  })
})
