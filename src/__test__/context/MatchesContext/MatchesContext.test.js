import React, { useContext } from "react";
import { MatchesContext } from "../../../context/MatchesContext/MatchesContext"
import { mount, shallow } from "enzyme"

// test specific imports
import withCustomStore from "../../components/withCustomStore"
import mockCurrentMatches from "../../mocks/mockCurrentMatches"

const MockContextConsumer = () => {
  const { currentMatches } = useContext(MatchesContext)
  const matches = currentMatches ? currentMatches : []
  const matchElems = matches.map((match, i) => <p key={i}>{match["uid"]}</p>)
  
  return (<div>
    {matchElems}
  </div>)
}

describe("MatchesContext", () => {
  let wrapper;

  it("Passes currentMatches value down to consumer component", () => {
    // Render a component with a manual store
    const mockStore = { currentMatches: mockCurrentMatches }
    wrapper = mount(withCustomStore(<MockContextConsumer />, mockStore))


    const expectedList = shallow(<div>{mockCurrentMatches.map((match, i) => <p key={i}>{match["uid"]}</p>)}</div>)
    const divElem = wrapper.find("div")

    expect(divElem.html()).toEqual(expectedList.html())
  })

  it("Passes null value down to consumer component", () => {
    // Render a component with a manual store
    wrapper = mount(withCustomStore(<MockContextConsumer />, {}))
    
    const divElem = wrapper.find("div")
    const expectedList = shallow(<div />)

    expect(divElem.html()).toEqual(expectedList.html())
  })
})
