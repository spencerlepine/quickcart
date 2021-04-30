import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  cartItem: {
    paddingTop: "10px",
    display: "flex",
    borderBottom: "1px solid lightgray",
  },
  itemPrice: {
    marginLeft: "auto",
    marginRight: "5px",
    color: "#008643",
    "@media (max-width: 900px)": {
      color: "rgb(66, 66, 66)",
      fontSize: "14px",
    },
  },
  itemName: {
    fontSize: "14px",
    color: "rgb(50, 50, 50)",
    "@media (max-width: 900px)": {
      color: "rgb(50, 50, 50)",
      fontSize: "14px",
    },
  },
  itemCount: {
    margin: "auto 5px",
    textAlign: "center",
    position: "relative",
    cursor: "pointer",
    height: "44px",
    width: "56px",
    border: "1px solid rgb(224, 224, 224)",
    padding: "0px",
    lineHeight: "40px",
    borderRadius: "4px",
    zIndex: "100",
    backgroundColor: "transparent",
    "&:hover": {
      backgroundColor: "rgb(247, 247, 247)",
    },
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
    "&:hover": {
      color: "#3b9ac6",
      textShadow: "1px 1px #ececec",
    },
  },
  delete: {
    width: "1.3em",
    height: "100%",
    color: "#ff6363",
    margin: "auto 5px",
    fontSize: "1.5em",
    textAlign: "center",
  },
  itemImage: {
    width: "50px",
    height: "50px",
    marginRight: "20px",
    "@media (max-width: 600px)": {
      marginRight: "5px",
    },
  }
}));
