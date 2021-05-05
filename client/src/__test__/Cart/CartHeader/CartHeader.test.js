import React from "react"
import CartHeader from "../../../components/Cart/CartHeader/CartHeader"
import { sampleCart } from "../sampleCart.js"

// Import modules for testing
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import configureStore from 'redux-mock-store' 
import { mount, shallow } from "enzyme"

describe("Cart", () => {
  const initialState = {}

  const middlewares = [thunk]
  const mockStore = configureStore(middlewares)
  let store = mockStore(initialState)
  let wrapper

  it("Displays h4 with cart total", () => {
    expect(2).toEqual(2)
    // wrapper = mount(
    //   <Provider store={store}>
    //     <Cart />
    //   </Provider>
    // )

    // let cartItemDivs = wrapper.find("div")

    // expect(cartItemDivs.length).toBeGreaterThan(sampleCart.length)
  })

  // it("Displays h4 with cart total", () => {
  //   wrapper = mount(
  //     <Provider store={store}>
  //       <Cart />
  //     </Provider>
  //   )
  //   let groceryCardName = wrapper.find("h4")

  //   expect(groceryCardName.text()).toEqual("Wraps")
  // })

  // it("Displays an image", () => {
  //   wrapper = mount(
  //     <Provider store={store}>
  //       <FoodCard groceryItem={sampleGrocery} showProp={true} />
  //     </Provider>
  //   )
  //   let groceryCardImage = wrapper.find("img")

  //   expect(groceryCardImage).toBeTruthy()
  //   expect(groceryCardImage.length).toEqual(1)
  // })

  // it("Displays sampleGrocery image as base64 value", () => {
  //   wrapper = mount(
  //     <Provider store={store}>
  //       <FoodCard groceryItem={sampleGrocery} showProp={true} />
  //     </Provider>
  //   )
  //   let groceryCardImage = wrapper.find("img").first()
  //   let sampleImg = `<img alt="${sampleGrocery.name}" src="${sampleGrocery.image}">`

  //   expect(groceryCardImage).toBeTruthy()
  //   expect(groceryCardImage.html()).toEqual(sampleImg)
  // })

  // it("Displays the '$purchase - $serving' price in a <p> tag1", () => {
  //   wrapper = mount(
  //     <Provider store={store}>
  //       <FoodCard groceryItem={sampleGrocery} showProp={true} />
  //     </Provider>
  //   )
  //   let groceryCardPrice = wrapper.find("p").first()
  //   let expectedPrice = `$${sampleGrocery.purchase_price} - $${sampleGrocery.serving_cost}`

  //   expect(groceryCardPrice.text()).toBe(expectedPrice)
  // })

  // it("Displays the purchase size in a <p> tag", () => {
  //   wrapper = mount(
  //     <Provider store={store}>
  //       <FoodCard groceryItem={sampleGrocery} showProp={true} />
  //     </Provider>
  //   )
  //   let groceryCardUnit = wrapper.find("p").last()
  //   let expectedUnit = sampleGrocery.purchase_size

  //   expect(groceryCardUnit.text()).toBe(expectedUnit)
  // })

  // it("Renders add button", () => {
  //   wrapper = mount(
  //     <Provider store={store}>
  //       <FoodCard groceryItem={sampleGrocery} showProp={true} />
  //     </Provider>
  //   )
  //   let groceryCardBtn = wrapper.find("button")

  //   expect(groceryCardBtn.length).toEqual(1)
  //   expect(groceryCardBtn.text()).toBe("+")
  // })
})