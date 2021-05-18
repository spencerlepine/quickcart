import { makeStyles } from "@material-ui/core/styles"

export default makeStyles(() => ({
  backupButton: {
    width: "fit-content",
    margin: "1em auto",
    marginBottom: "0",
    color: "white",
    backgroundColor: "#5f91fb",
    padding: "0.5em 1em",
    border: "2px solid #3647bf",
    borderRadius: "4px",
    '&:hover': {
      backgroundColor: "#5d86de",
    },
  },
  backupDiv: {
    paddingLeft: "2em",
  }
}))
