import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    cartItem: {
        display: "flex",
    },
    itemPrice: {
        marginLeft: "auto",
        marginRight: "10px"
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
        background: "#43ace3",
        color: "#fff",
        display: "inline-block",
        '&:hover' : {
            background: "#3b9ac6",
        },
      },
      delete: {
          width: "1.3em",
          height: "100%",
          backgroundColor: "#ff6363",
          margin: "auto 5px",
          fontSize: "1.5em",
          textAlign: "center"
      }
}));