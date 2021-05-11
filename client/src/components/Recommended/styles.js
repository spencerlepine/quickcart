import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  gridView: {
    minHeight: "50vh",
    maxWidth: "800px",
    marginTop: "1%",
    marginBottom: "1vh",
    backgroundColor: "white",
    padding: "4vh",
    borderRadius: "1vh",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: "1.2em",
  },
  recommendedGrid: {
    display: "grid",
    gridColumnGap: "auto",
    gridTemplateColumns: "auto auto auto",
    "@media (max-width:850px)": {
      gridTemplateColumns: "auto auto",
    },
    "@media (max-width:600px)": {
      gridTemplateColumns: "auto",
    },
  },
  loadSpinner: {
    margin: "auto",
    position: "fixed",
    left: "50%",
  },
}));
