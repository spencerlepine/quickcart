import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import NotificationsPopup from "./components/NotificationsPopup/NotificationsPopup";
import Navbar from "./components/Navbar/Navbar";
import ViewLayout from "./wrappers/ViewLayout/ViewLayout";
import Footer from "./components/Footer/Footer";

describe("App component", () => {
  it("should render correctly with no errors", () => {
    const component = shallow(<App />);
    expect(component).toBeTruthy();
  });

  it("should render NotificationsPopup", () => {
    const component = shallow(<App />);
    const popupElem = component.find(NotificationsPopup);
    expect(popupElem).toMatchSnapshot();
  });

  it("should render Navbar", () => {
    const component = shallow(<App />);
    const navbarElem = component.find(Navbar);
    expect(navbarElem).toBeTruthy();
    expect(navbarElem).toMatchSnapshot();
  });

  it("should render ViewLayoutWrapper", () => {
    const component = shallow(<App />);
    const layoutElem = component.find(ViewLayout);
    expect(layoutElem).toBeTruthy();
    expect(layoutElem).toMatchSnapshot();
  });

  it("should render Footer", () => {
    const component = shallow(<App />);
    const footerElem = component.find(Footer);
    expect(footerElem).toBeTruthy();
    expect(footerElem).toMatchSnapshot();
  });
});
