import React from "react";
import App from "../App"
import { mount, shallow  } from "enzyme"

// test specific imports
import Routes from "../components/Routes/Routes"

describe("App", () => {
  // Render in act function to process the context unsubscribe useEffect
  let wrapper;

  it("Renders everything without crashing", async () => {
    wrapper = await shallow(<App />)

    expect(wrapper).toBeTruthy()
  })

  it("Renders Routes to display pages of app", async () => {
    wrapper = shallow(<App />)

    const routesComponent = wrapper.find(Routes)
    expect(routesComponent.length).toEqual(1)
  })
})