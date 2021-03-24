import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
    cartView: {
        marginTop: "5%",
        marginBottom: "1vh",
        backgroundColor: "white",
        padding: "8vh",
        borderRadius: "1vh",
        alignItems: "center",
        width: "max-content",
        marginLeft: "auto",
        marginRight: "auto",
        fontSize: "1.2em",
    },
    total: {
        fontSize: "1.5em",
        color: "#4bd03c",
        textShadow: "1px 1px #20a0000f",
    }
}));