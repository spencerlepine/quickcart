import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
    cartView: {
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
        fontSize: "1.5em",
        color: "#0b4c04",
        textShadow: "1px 1px #20a0000f",
        marginLeft: "auto",
        width: "fit-content",
    },
    cartHeader: {
        display: "grid",
        gridTemplateColumns: "auto auto",
    },
    itemsGrid: {
        display: "flex",
        overflow: "scroll",
        margin: "0 auto 5% auto",
        backgroundColor: "#fff",
    },
}));