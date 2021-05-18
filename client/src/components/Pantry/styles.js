import { makeStyles } from "@material-ui/core/styles"

export default makeStyles((theme) => ({
  itemsGrid: {
    width: "fit-content !important",
    display: "grid",
    gridTemplateColumns: "auto auto auto auto",
    "@media (max-width:1000px)": {
      gridTemplateColumns: "auto auto auto",
    },
    "@media (max-width:800px)": {
      gridTemplateColumns: "auto auto",
    },
    margin: "0 auto 5% auto",
    backgroundColor: "#fff",
  },
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
}))
