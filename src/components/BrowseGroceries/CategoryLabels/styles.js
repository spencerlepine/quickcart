import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  categoriesContainter: {
    paddingTop: "20px",
    margin: "auto",
    marginTop: "5px",
    width: "fit-content",
    minWidth: "400px",
    minHeight: "40px",
    height: "fit-content",
    maxWidth: "800px",
    overflowX: "scroll",
    MsOverflowStyle: "none",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
      display: "none",
    }
  },
}));
