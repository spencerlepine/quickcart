import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
    orderButton: {
        width: "fit-content",
        backgroundColor: "rgb(67, 176, 42)",
        borderColor:"rgb(67, 176, 42)",
        height:"48px",
        fontSize:"18px",
        borderRadius:"4px",
        textAlign:"center",
        fontWeight:"600",
        position:"relative",
        padding:"10px 18px",
        color:"rgb(255, 255, 255)",
        textDecoration: "none",
    },
    browseButton: {
        display: "block",
        width: "fit-content",
        margin: "auto",
    },
    cart: {
        margin: "auto",
        display: "inherit",
        filter: "invert(1) brightness(0.7)",
        height: "100px",
    },
    emptyMessage: {
        marginTop: "20px",
        textAlign: "center",
        fontSize: "20px",
        fontWeight: "600",
    },
    emptyCart: {
        marginTop: "30px",
        marginBottom: "50px",
    }
}));