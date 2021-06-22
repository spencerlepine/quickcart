import { makeStyles } from "@material-ui/core/styles"

export default makeStyles(() => ({
  valuePrompt: {
    width: "fit-content",
    position: "relative",
    gridColumnStart: "1",
    gridColumnEnd: "3",
    backgroundColor: "#ffe1e1",
    border: "2px solid #a53232",
    padding: "0.5em 1em 0.5em 2.5em",
    margin: "0.5em",
    '& p': {
      display: "inline",
    }
  },
  errorIcon: {
    display: "inline",
    position: "absolute",
    top: "18%",
    left: "5%",
    color: "#d02828"
  },
  findBtn: {
    "marginLeft": "0.8em",
    "color": "#fbfbfb",
    "border": "2px solid #4432a5",
    "padding": "0.2em 0.5em",
    "background": "#5682ea"
  },
}))