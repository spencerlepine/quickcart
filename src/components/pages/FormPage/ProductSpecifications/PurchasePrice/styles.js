import { makeStyles } from "@material-ui/core/styles"

export default makeStyles((theme) => ({
  purchasePrice: {
    position: "relative",
    justifySelf: "center",
    margin: "auto",
  },
  itemPrice: {
    display: "block",
    margin: "auto",
    maxWidth: "100px",
    "& input": {
      background: "white",
      width: "fit-content",
      margin: "auto",
      fontSize: "26px",
      lineHeigt: "26px",
      fontWeight: "700",
      padding: "6px",
    },
  },
  priceIndicator: {
    position: "absolute",
    fontSize: "26px",
    margin: "0",
    padding: "0",
    left: "-15px",
    bottom: "6px",
  },
  divLabel: {
    fontSize: "13px",
    padding: "0",
    color: "#403e3e",
  },
}))
