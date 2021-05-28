import { makeStyles } from "@material-ui/core/styles"

export default makeStyles(() => ({
  importDiv: {
    padding: "2em",
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
  fileInput: {
    backgroundColor: "#f5f5f5",
    border: "2px dashed #b7b7b7",
    borderRadius: "10px",
    width: "fit-content",
    margin: "4px",
    height: "100px",
    '& p': {
      padding: "1em",
    },
    padding: "15px",
    color: "#ce002e",
  },
}))
