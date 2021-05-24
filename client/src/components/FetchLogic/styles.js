import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  center: {
    "position": "absolute",
    "width": "200px",
    "height": "200px",
    "top": "50%",
    "left": "50%",
    "marginLeft": "-100px",
    "marginTop": "-100px"
  },
  fullscreenDiv: {
    "backgroundColor": "white",
    zIndex: "199",
    "width": "100%",
    "height": "100vh",
    "overflowY": "hidden",
    "bottom": "0px",
    "top": "0px",
    "left": "0",
    "position": "absolute"
  },
}));
