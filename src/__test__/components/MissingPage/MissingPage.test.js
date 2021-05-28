import React from "react";
import MissingPage from "../../../components/MissingPage/MissingPage"
import { mount } from "enzyme"

// test specific imports
import MockWrapper from "../MockWrapper"
import { Link } from "react-router-dom"
import { HOME } from "../../../constants/routeConstants"

describe("MissingPage", () => {
  let wrapper = mount(
    <MockWrapper>
      <MissingPage />
    </MockWrapper>
  )

  it("Displays Error message", () => {
    let warningElement = wrapper.find("p").first()
    expect(warningElement).toBeTruthy()
  })

  it("Renders home link for user", () => {
    const homeLink = wrapper.find(Link)
    expect(homeLink.length).toEqual(1)
    expect(homeLink.first().props().to).toBe(HOME)
  })
})
