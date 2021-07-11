import { makeStyles } from "@material-ui/core/styles"

export default makeStyles((theme) => ({
  cartItem: {
    paddingTop: "10px",
    paddingBottom: "10px",
    display: "flex",
    // borderBottom: "1px solid lightgray",
    '&:hover': {
      backgroundColor: "whitesmoke",
    },
  },
  itemSize: {
    maxWidth: "200px",
    textWrap: "anywhere",
    margin: "0.25em",
    color: "rgb(140 140 140)",
    fontSize: "14px",
    "@media (max-width: 900px)": {
      fontSize: "14px",
    },
  },
  itemName: {
    maxWidth: "180px",
    overflow: "hidden",
    whiteSpace: "wrap",
    fontWeight: "600",
    display: "inline",
    fontSize: "18",
    marginRight: "auto",
    color: "black",
    "@media (max-width: 900px)": {
      color: "rgb(50, 50, 50)",
      fontSize: "18px",
    },
  },
  itemCount: {
    margin: "auto 5px",
    textAlign: "center",
    position: "relative",
    cursor: "pointer",
    color: "rgb(117, 117, 117)",
    height: "44px",
    width: "56px",
    minWidth: "56px",
    maxWidth: "56px",
    border: "1px solid rgb(224, 224, 224)",
    padding: "0px",
    backgroundColor: "white",
    lineHeight: "40px",
    borderRadius: "4px",
    zIndex: "4",
    "&:hover": {
      backgroundColor: "rgb(247, 247, 247)",
    },
  },
  btn: {
    width: "fit-content",
    textAlign: "center",
    position: "relative",
    cursor: "pointer",
    height: "44px",
    marginTop: "auto",
    marginBottom: "auto",
    fontFamily: 'Eina, -apple-system, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    padding: "0px",
    paddingLeft: "0.25em",
    paddingRight: "0.25em",
    lineHeight: "40px",
    borderRadius: "4px",
    fontSize: "36px",
    color: "rgb(67, 176, 42)",
    fontWeight: "300",
    zIndex: "4",
    backgroundColor: "transparent",
    "&:hover": {
      backgroundColor: "rgb(247, 247, 247)",
    },
  },
  deleteBtn: {
    marginLeft: "auto",
    width: "auto",
  },
  itemImage: {
    width: "auto",
    maxWidth: "80px",
    margin: "auto",
    height: "80px",
    display: "block",
  },
  itemInfo: {
    margin: "auto",
    marginLeft: "0.5em",
    minWidth: "100px",
    width: "auto",
    display: "inline",
  },
  imageContainer: {
    backgroundColor: "#e6e6e6",
    marginRight: "20px",
    width: "80px",
    "@media (max-width: 600px)": {
      marginRight: "5px",
    },
  },
  itemPrice: {
    "color": "#4284ff",
    "height": "fit-content",
    "margin": "auto"
  }
}))
