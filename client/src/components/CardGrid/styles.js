import { makeStyles } from "@material-ui/core/styles"

export default makeStyles(() => ({
  cardGrid: {
    paddingLeft: "5px",
    paddingRight: "5px",
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
}))
  