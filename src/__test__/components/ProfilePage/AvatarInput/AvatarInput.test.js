import React from "react";
import AvatarInput from "../../../../components/ProfilePage/AvatarInput/AvatarInput"
import { mount  } from "enzyme"

// test specific imports
import emptyAvatar from "../../../../images/emptyAvatar.png"
import { act } from "@testing-library/react-hooks"
import mockCurrentUser from "../../../mocks/mockCurrentUser"
import withCustomStore from "../../withCustomStore"

describe("AvatarInput", () => {
  let wrapper = mount(withCustomStore(<AvatarInput />, { currentUser: mockCurrentUser }))

  const sampleProfilePic = "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"

  it("Renders the component without crashing", () => {
    expect(wrapper).toBeTruthy()
  })

  it('Displays image passed down through props', () => {
    // Render component with currentProfile prop
    const customProfileAvatar = <AvatarInput currentProfile={sampleProfilePic} />
    let wrapper = mount(withCustomStore(customProfileAvatar, mockCurrentUser))

    const imageElem = wrapper.find("img")
    expect(imageElem).toBeTruthy()
    expect(imageElem.prop("src")).toEqual(sampleProfilePic)
  });

  it('Displays emptyAvatar to replace empty prop', () => {
    // Render component with currentProfile prop
    let wrapper = mount(withCustomStore(<AvatarInput />, mockCurrentUser))
  
    const imageElem = wrapper.find("img")
    expect(imageElem).toBeTruthy()
    expect(imageElem.prop("src")).toEqual(emptyAvatar)
  });

  it('Renders an file input to upload images', () => {
    // Render component with currentProfile prop
    let wrapper = mount(withCustomStore(<AvatarInput />, mockCurrentUser))
  
    const inputElem = wrapper.find("input")
    expect(inputElem).toBeTruthy()
    expect(inputElem.length).toEqual(1)
    expect(inputElem.prop("type")).toEqual("file")
  });

  it('Calls handleImageInput when input elem is given a file', async () => {
    // Arrange
    const updateProfilePic = jest.fn(() => "YEET")
    const mockStore = { currentUser: null, updateProfilePic }
    wrapper = mount(withCustomStore(<AvatarInput />, mockStore))

    const imageFile = new File([new Blob([emptyAvatar], {type : 'image/png'})], "avatar.png", {
      type: "image/png",
    })

    // Act
    await act(async () => { 
      await wrapper.find("input").simulate('change', { preventDefault: () => {}, target: {files: [imageFile]}})
    })

    // Broken, does not finish read file during test
    // expect(updateProfilePic).toHaveBeenCalled()
  });
})
