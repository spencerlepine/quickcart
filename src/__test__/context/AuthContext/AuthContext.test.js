import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext/AuthContext"
import { mount } from "enzyme"

// test specific imports
import withCustomStore from "../../components/withCustomStore"

const MockContextConsumer = () => {
  const { currentUser } = useContext(AuthContext)
  const userId = currentUser ? currentUser["uid"] : ""

  return (<div>
    {userId}
  </div>)
}

describe("AuthContext", () => {
  let wrapper;

  it("Passes currentUser value down to consumer component", () => {
    // Render a component with a manual store
    const mockStore = { currentUser: { uid: "fakeUserID" } }
    wrapper = mount(withCustomStore(<MockContextConsumer />, mockStore))
 
    expect(wrapper.text()).toEqual(mockStore["currentUser"]["uid"])
  })

  it("Passes null value down to consumer component", () => {
    // Render a component with a manual store
    wrapper = mount(withCustomStore(<MockContextConsumer />, {}))
 
    expect(wrapper.text()).toEqual("")
  })
})
