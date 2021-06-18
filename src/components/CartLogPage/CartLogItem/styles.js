import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  logView: {
    position: "relative",
    height: "fit-content",
    margin: "3px",
    minWidth: "300px",
  },
  productName: {
    overflowWrap: "anywhere",
    "display": "inline-flex",
    "textTransform": "uppercase",
    maxWidth: "180px !important",
  },
  productPrice: {
    "textTransform": "uppercase",
    float: "right",
    marginRight: "0.5em",
    display: "inline",
  },
}));
