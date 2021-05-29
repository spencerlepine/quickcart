import React, { useContext } from "react";
import { MeetupsContext } from "../../../context/MeetupsContext/MeetupsContext"
import { mount, shallow } from "enzyme"

// test specific imports
import withCustomStore from "../../components/withCustomStore"
import mockCurrentMeetups from "../../mocks/mockCurrentMeetups"

const MockContextConsumer = () => {
  const { currentMeetups } = useContext(MeetupsContext)
  const meetups = currentMeetups ? currentMeetups : []
  const meetupElems = meetups.map((meetup, i) => (
      <div key={i} >
        <p>{meetup["uid"]}</p>
        <p>{meetup["displayName"]}</p>
        <p>{meetup["location"]}</p>
      </div>
  ))
  
  return (<>
    {meetupElems}
  </>)
}

describe("MeetupsContext", () => {
  let wrapper;

  it("Passes currentMeetups value down to consumer component", () => {
    // Render a component with a manual store
    const mockStore = { currentMeetups: mockCurrentMeetups }
    wrapper = mount(withCustomStore(<MockContextConsumer />, mockStore))

    const expectedList = mount(<>{mockCurrentMeetups.map((meetup, i) => (
        <div key={i} >
          <p>{meetup["uid"]}</p>
          <p>{meetup["displayName"]}</p>
          <p>{meetup["location"]}</p>
        </div>
    ))}</>)
    const divElem = wrapper.find("div")

    expect(divElem.html()).toEqual(expectedList.html())
  })

  it("Passes null value down to consumer component", () => {
    // Render a component with a manual store
    wrapper = mount(withCustomStore(<MockContextConsumer />, { currentMeetups: [] }))

    const divElem = wrapper.find("div").first()

    expect(divElem.length).toBeFalsy()
  })
})
