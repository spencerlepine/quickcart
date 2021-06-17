import { makeStyles } from "@material-ui/core/styles"

export default makeStyles(() => ({
  resultGrid: {
    margin: "auto",
    marginTop: "5%",
    justifyContent: "center",
    display: "grid",
    gridTemplateColumns: "auto auto auto auto",
    "@media (max-width:1000px)": {
      gridTemplateColumns: "auto auto auto",
    },
    "@media (max-width:800px)": {
      gridTemplateColumns: "auto auto",
    },
  },
}))
