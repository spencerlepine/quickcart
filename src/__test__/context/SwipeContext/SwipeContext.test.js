import React, { useContext } from "react";
import { SwipeContext } from "../../../context/SwipeContext/SwipeContext"
import { mount, shallow } from "enzyme"

// test specific imports
import withCustomStore from "../../components/withCustomStore"
import mockCurrentUser from "../../mocks/mockCurrentMeetups"

const MockContextConsumer = () => {
  const { userToSwipe } = useContext(SwipeContext)

  const displayName = userToSwipe ? userToSwipe["displayName"] : null
  return <p>{displayName}</p>
}

describe("SwipeContext", () => {
  let wrapper;

  it("Passes userToSwipe value down to consumer component", () => {
    // Render a component with a manual store
    const mockStore = { userToSwipe: mockCurrentUser }
    wrapper = mount(withCustomStore(<MockContextConsumer />, mockStore))

    const expectedElem = shallow(<p>{mockCurrentUser["displayName"]}</p>)
    const pElem = wrapper.find("p")

    expect(pElem.html()).toEqual(expectedElem.html())
  })

  it("Passes null value down to consumer component", () => {
    // Render a component with a manual store
    wrapper = mount(withCustomStore(<MockContextConsumer />, {}))

    const pElem = wrapper.find("p")

    expect(pElem.text()).toBeFalsy()
  })
})
