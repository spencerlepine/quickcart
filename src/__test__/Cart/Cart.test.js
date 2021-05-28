import React from "react"
import Cart from "../../components/Cart/Cart"
import { sampleCart } from "./sampleCart.js"
import EmptyPrompt from "../../components/EmptyPrompt/EmptyPrompt"
import cartImg from "../../images/cart.svg"

// Import modules for testing
import { Provider } from "react-redux"
import { BrowserRouter as MockRouter } from "react-router-dom"
import thunk from "redux-thunk"
import configureStore from 'redux-mock-store' 
import { mount, shallow } from "enzyme"

describe("Cart", () => {
  const initialState = {}

  const middlewares = [thunk]
  const mockStore = configureStore(middlewares)
  let store = mockStore(initialState)
  let wrapper

  it("Displays div for each sampleCart item", () => {
    store = mockStore({ cart: sampleCart })
    wrapper = mount(
      <Provider store={store}>
        <Cart />
      </Provider>
    )

    let cartItemDivs = wrapper.find("div")

    expect(cartItemDivs.length).toBeGreaterThan(sampleCart.length)
  })

  it("Displays EmptyPrompt when cart is empty", () => {
    store = mockStore({ cart: [] })

    const addRouter = ({ children }) => (
      <MockRouter>{children}</MockRouter>
    )

    wrapper = mount(
      <MockRouter>
        <Provider store={store}>
          <Cart />
        </Provider>
      </MockRouter>
    )

    let emptyPrompt = mount(
      <MockRouter> 
        <EmptyPrompt
          image={cartImg}
          message="Your cart is empty"
          destination="/"
          buttonText="Browse Items"
          addFilter
        />
      </MockRouter>)

    let emptyPromptDiv = wrapper.find(EmptyPrompt)
    expect(emptyPromptDiv).toBeTruthy()

    // Displays the empty cart image
    let emptyPromptImage = emptyPromptDiv.find("img").first()
    expect(emptyPromptImage).toBeTruthy()
    expect(emptyPromptImage.prop("src")).toEqual(cartImg)

    // Displays an add button
    let emptyButton = emptyPromptDiv.find("button")
    expect(emptyButton).toBeTruthy()
  })
})
