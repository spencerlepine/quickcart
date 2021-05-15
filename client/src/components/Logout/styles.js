import { makeStyles } from "@material-ui/core/styles"

export default makeStyles(() => ({
  logoutDiv: {
    width: "fit-content",
    margin: "auto",
    padding: "1em",
  },
  logoutButton: {
    width: "fit-content",
    backgroundColor: "rgb(67, 176, 42)",
    borderColor: "rgb(67, 176, 42)",
    height: "48px",
    fontSize: "18px",
    borderRadius: "4px",
    textAlign: "center",
    fontWeight: "600",
    position: "relative",
    padding: "10px 18px",
    color: "rgb(255, 255, 255)",
    textDecoration: "none",
    '&:hover': {
      backgroundColor: "rgb(59 148 38)",
    },
  },
}))
