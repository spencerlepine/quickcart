import { makeStyles } from "@material-ui/core/styles"

export default makeStyles(() => ({
  overviewContainer: {
    maxWidth: "700px",
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
  loadMoreBtn: {
    gridColumnStart: "1",
    gridColumnEnd: "5",
    "@media (max-width:1000px)": {
      gridColumnEnd: "4",
    },
    "@media (max-width:800px)": {
      gridColumnEnd: "3",
    },
    backgroundColor: "#ddd",
    borderRadius: "2px",
    display: "block",
    textAlign: "center",
    fontSize: "0.875rem",
    fontWeight: "800",
    letterSpacing: "1px",
    cursor: "pointer",
    textTransform: "uppercase",
    padding: "10px 0",
    transition:
      "background-color 0.2s ease-in-out, border-color 0.2s ease-in-out, color 0.3s ease-in-out",
  },
  progressBar: {
    gridColumnStart: "1",
    gridColumnEnd: "5",
    "@media (max-width:1000px)": {
      gridColumnEnd: "4",
    },
    "@media (max-width:800px)": {
      gridColumnEnd: "3",
    },
    height: "10px",
    zIndex: "109",
    width: "100%",
    position: "fixed",
    bottom: "0",
    left: "0",
    backgroundColor: "#39982185",
  },
}))
