import React from "react";
import Routes from '../../../components/Routes/Routes';
import { shallow } from "enzyme"

// Import modules for testing
import { Route } from 'react-router';
import { HOME, NOTIFICATIONS, PROFILE, WELCOME , LOGIN, SIGNUP } from "../../../constants/routeConstants"
import PetSwipe from "../../../components/PetSwipe/PetSwipe"
import NotificationPage from "../../../components/NotificationPage/NotificationPage"
import ProfilePage from "../../../components/ProfilePage/ProfilePage"
import MissingPage from "../../../components/MissingPage/MissingPage";
import UserWelcome from "../../../components/UserWelcome/UserWelcome";
import LogIn from "../../../components/LogIn/LogIn";
import SignUp from "../../../components/SignUp/SignUp";

describe("Routes", () => {
  let wrapper = shallow(
      <Routes />
  )

  const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
    const routeProps = route.props();
    // Skip the last MissingPage route
    if (pathMap[routeProps.path] !== undefined) {
      return pathMap
    }
    pathMap[routeProps.path] = routeProps.component;
    return pathMap;
    }, {});

  it("Displays PetSwipe on home page", () => {
    expect(pathMap[HOME]).toBe(PetSwipe);
  })

  it("Displays Notifications at path", () => {
    expect(pathMap[NOTIFICATIONS]).toBe(NotificationPage);
  })

  it("Displays ProfilePage at path", () => {
    expect(pathMap[PROFILE]).toBe(ProfilePage);
  })

  it("Displays UserWelcome on home page", () => {
    expect(pathMap[WELCOME]).toBe(UserWelcome);
  })

  it("Displays LogIn on at correct path", () => {
    expect(pathMap[LOGIN]).toBe(LogIn);
  })

  it("Displays SignUp at correct path", () => {
    expect(pathMap[SIGNUP]).toBe(SignUp);
  })

  it("Displays MissingPage on non-existent page", () => {
    expect(pathMap["/empty"]).toBe(MissingPage);
  })

  it("Redirects from HOME to WELCOME when NOT authenticated", () => {
    // do something
    // expect(false).toEqual(true)
  })

  it("Redirects from NOTIFICATIONS to WELCOME when NOT authenticated", () => {
    // do something
    // expect(false).toEqual(true)
  })

  it("Redirects from PROFILE to WELCOME when NOT authenticated", () => {
    // do something
    // expect(false).toEqual(true)
  })
})
