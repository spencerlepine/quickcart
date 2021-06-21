import { makeStyles } from "@material-ui/core/styles"

export default makeStyles((theme) => ({
  promptContainer: {
    width: "fit-content",
    margin: "auto",
  },
  upcSearchBtn: {
    borderRadius: "2px",
    border: "1px solid #25a941",
    background: "#25a941",
    width: "fit-content",
    textTransform: "uppercase",
    color: "white",
    fontWeight: "600",
    whiteSpace: "nowrap",
    "position": "relative",
    bottom: "6%",
    padding: "1em 2em",
    margin: "auto",
    paddingLeft: "3.5em",
    '&:hover': {
      backgroundColor: "#16822d",
      boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 0px 4px",
    },
  },
  barcodeIcon: {
    "margin": "0",
    "position": "absolute",
    "top": "50%",
    "left": "15%",
    fontSize: "2.5em",
    "MsTransform": "translate(-50%, -50%)",
    "transform": "translate(-50%, -50%)"
  },
  createBtn: {
    borderRadius: "2px",
    border: "1px solid #25a941",
    background: "white",
    width: "fit-content",
    textTransform: "uppercase",
    color: "#25a941",
    fontWeight: "600",
    whiteSpace: "nowrap",
    marginLeft: "1em",
    marginRight: "1em",
    "margin": "auto",
    "position": "relative",
    padding: "1em 2em",
    paddingLeft: "3.5em",
    '&:hover': {
      backgroundColor: "#b2f3c1",
      boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 0px 4px",
    },
  },
  createIcon: {
    "margin": "0",
    "position": "absolute",
    "top": "50%",
    "left": "20%",
    fontSize: "2em",
    "MsTransform": "translate(-50%, -50%)",
    "transform": "translate(-50%, -50%)"
  },
}))
