import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { createGrocery } from "../../actions/groceries"
import { setId } from "../../actions/selectedItem"
import { updateGrocery } from "../../actions/groceries"
import useStyles from "./styles.js"

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

const Form = () => {
    const [ itemData, setItemData ] = useState({
        name: "",
        purchase_price: "",
        purchase_size: "",
        serving: "",
        servings_per: ""
    })
    const dispatch = useDispatch()
    const history = useHistory()
    const classes = useStyles()

    const currentId = useSelector(state => state.selectedItem)
    const currentItem = useSelector((state) => (currentId ? state.groceries.find((item) => item._id === currentId) : null));
    
    useEffect(() => {
        // Populate the form if the user selected an item
        if (currentId && currentItem) {
            // Translate the purchase price decimal data for the form to read
            let validCurrentItem = {...currentItem, purchase_price: currentItem["purchase_price"]["$numberDecimal"]}
            setItemData(validCurrentItem)
        }
    }, [currentId, currentItem])

    const handleChange = (event) => {
        const { name, value } = event.target
        setItemData(prevItems => ({ ...prevItems, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (currentId) {
            dispatch(updateGrocery(currentId, itemData))
            history.push("/")
            clearForm()
        } else if (itemData.name && itemData.purchase_price && itemData.purchase_size && itemData.serving && itemData.servings_per) {
            dispatch(createGrocery(itemData))
            history.push("/")
            clearForm()
        } else {
            alert("Please enter valid data")
        }
    }

    const clearForm = () => {
        dispatch(setId(null))
        setItemData({
            name: "",
            purchase_price: "",
            purchase_size: "",
            serving: "",
            servings_per: ""
        })
    }

    return (
        <div className={classes.formDiv}>
            <Container component="main" maxWidth="xs">
                <div className={classes.paper}>
                    <form className={classes.form} noValidate onSubmit={handleSubmit}>
                        <Typography component="h1" variant="h4" className={classes.formHeader}>
                            Item Details    
                        </Typography>
                        <label>Name: (Orange, BBQ Sauce)</label>
                        <TextField
                            onChange={handleChange}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="name"
                            label="Name"
                            value={itemData.name}
                        />

                        <label>Purchase Price: (0.99, 2.50)</label>
                        <TextField
                            onChange={handleChange}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="purchase_price"
                            value={itemData.purchase_price}
                            placeholder="Purchase Price"
                            />

                        <label>Purchase Size: (16oz, handful)</label>
                        <TextField
                            onChange={handleChange}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="purchase_size"
                            value={itemData.purchase_size}
                            placeholder="Purchase Size"
                            />
                        
                        <label>Serving Size: (3oz, 1 piece)</label>
                        <TextField  
                            onChange={handleChange}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="serving"
                            value={itemData.serving}
                            placeholder="Serving Size"
                            />

                        <label>Servings per: (7, 3)</label>
                        <TextField
                            onChange={handleChange}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="servings_per"
                            value={itemData.servings_per}
                            placeholder="Servings Per" 
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.button}
                        >
                            Submit
                        </Button>
                        
                        {Object.values(itemData).find(val => val !== "") && <Button
                            onClick={clearForm}
                            color="secondary"
                            fullWidth
                            variant="contained"
                            className={classes.button}
                        >
                            Clear
                        </Button>} 
                    </form>
                </div>
            </Container>
        </div>
    )
}

export default Form
