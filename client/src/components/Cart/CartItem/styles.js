import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    cartItem: {
        display: "flex",
        borderBottom: "1px solid lightgray",
    },
    itemPrice: {
        marginLeft: "auto",
        marginRight: "5%",
        color: "#008643",
        "@media (max-width: 900px)": {
            marginLeft: "5%",
        },
    },
    itemName: {
        paddingRight: "4vh"
    },
    itemCount: {
        padding: "6px",
        border: "2px solid gray",
        margin: "auto 5px",
        height: "100%",
        width: "1em",
        textAlign: "center"
    },
    btn: {
        width: "1em",
        height: "100%",
        margin: "auto 5px",
        lineHeight: "1em",
        fontSize: "2em",
        fontWeight: "bold",
        textAlign: "center",
        color: "#43ace3",
        display: "inline-block",
        '&:hover' : {
            color: "#3b9ac6",
            textShadow: "1px 1px #ececec"
        },
      },
      delete: {
          width: "1.3em",
          height: "100%",
          color: "#ff6363",
          margin: "auto 5px",
          fontSize: "1.5em",
          textAlign: "center"
      }
}));