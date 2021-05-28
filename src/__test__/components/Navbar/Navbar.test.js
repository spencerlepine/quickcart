import React from "react";
import Navbar from "../../../components/Navbar/Navbar"
import { mount, shallow } from "enzyme"

// test specific imports
import wooferLogo from "../../../images/wooferLogo.png"
import MockWrapper from "../MockWrapper"
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { HOME, PROFILE, NOTIFICATIONS } from "../../../constants/routeConstants"
import { Link } from "react-router-dom"
import Image from 'react-bootstrap/Image'

describe("Navbar", () => {
  let wrapper = mount(
    <MockWrapper>
      <Navbar />
    </MockWrapper>
  )

  it("Displays Woofer Logo", () => {
    let navbarImage = wrapper.find(Image)

    expect(navbarImage).toBeTruthy()
    expect(navbarImage.length).toEqual(1)
    expect(navbarImage.prop("src")).toEqual(wooferLogo)
  })

  it("Displays Notification Icon", () => {
    let mockNotifIcon = shallow(<NotificationsIcon />)

    // Hard-coded second to last icon
    let notifIcon = wrapper.find("svg").first()
    expect(notifIcon).toBeTruthy()
    
    expect(notifIcon.html()).toEqual(mockNotifIcon.html())
  })

  it("Displays Profile Icon", () => {
    let mockNotifIcon = shallow(<AccountCircleIcon />)

    // Hard-coded far-right icon
    let notifIcon = wrapper.find("svg").last()
    expect(notifIcon).toBeTruthy()
    
    expect(notifIcon.html()).toEqual(mockNotifIcon.html())
  })

  it("Renders home link first", () => {
    const firstLink = wrapper.find(Link).first()
    expect(firstLink.props().to).toBe(HOME)
  })

  it("Renders notifications link second", () => {
    const secondLink = wrapper.find(Link).at(1)
    expect(secondLink.props().to).toBe(NOTIFICATIONS)
  })

  it("Renders profile link third", () => {
    const thirdLink = wrapper.find(Link).at(2)
    expect(thirdLink.props().to).toBe(PROFILE)
  })
})
