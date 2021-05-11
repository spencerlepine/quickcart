import { makeStyles } from "@material-ui/core/styles"

export default makeStyles(() => ({
  importDiv: {
    padding: "2em",
  },
  inputLabel: {
    color: "#385f9a",
  },
  fileInput: {
    backgroundColor: "#f5f5f5",
    border: "2px dashed #b7b7b7",
    borderRadius: "10px",
    width: "fit-content",
    padding: "4px",
    margin: "4px",
    height: "100px",
    '& p': {
      padding: "1em",
    },
  },
}))
