import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
    cartView: {
        maxWidth: "700px",
        marginTop: "5%",
        marginBottom: "1vh",
        backgroundColor: "white",
        padding: "4vh",
        borderRadius: "1vh",
        alignItems: "center",
        marginLeft: "auto",
        marginRight: "auto",
        fontSize: "1.2em",
    },
    total: {
        color: "rgb(57, 57, 57)",
        textShadow: "1px 1px #20a0000f",
        margin: "auto 0 auto auto",
        fontSize: "16px",
        fontWeight: "600",
    },
    cartHeader: {
        display: "grid",
        gridTemplateColumns: "auto auto",
        margin: "20px auto",
    },
    itemsGrid: {
        display: "flex",
        overflow: "scroll",
        margin: "0 auto 5% auto",
        backgroundColor: "#fff",
    },
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