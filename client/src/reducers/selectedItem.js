const reducer = (selectedItem = null, action) => {
    switch(action.type) {
        case("SET_ID"):
            return action.payload
        default:
            return selectedItem       
    }
}

export default reducer