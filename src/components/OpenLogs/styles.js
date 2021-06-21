import { makeStyles } from "@material-ui/core/styles"

export default makeStyles(() => ({
  openLogButton: {
    "maxHeight": "1em",
    position: "relative",
    display: "block",
    width: "fit-content",
    height: "fit-content",
    margin: "2em auto",
    color: "white",
    textDecoration: "none",
    fontSize: "0.85em",
    backgroundColor: "#f79721",
    padding: "1em 4em 1em 1.75em",
    border: "0px solid #d27a0e",
    fontWeight: "500",
    borderRadius: "4px",
    '&:hover': {
      backgroundColor: "#ea9020",
    },
  },
  backupDiv: {
    padding: "1em 2em",
    paddingTop: "1em",
  },
  inputLabel: {
    color: "#4f7ee6",
    position: "relative",
    top: "-8px",
    paddingLeft: "10px",
  },
  importIcon: {
    color: "#4f7ee6",
  },
  downloadArrow: {
    borderRadius: "0px 4px 4px 0px",
    position: "absolute",
    top: "0px",
    right: "0",
    backgroundColor: "#d27a0e",
    '& svg': {
      padding: "7px",
    }
  },
}))
