import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  cartHeader: {
    display: "grid",
    gridTemplateColumns: "auto auto",
    margin: "20px auto",
  },
  total: {
    color: "rgb(57, 57, 57)",
    textShadow: "1px 1px #20a0000f",
    margin: "auto 0 auto auto",
    fontSize: "18px",
    fontWeight: "500",
  },
  orderButton: {
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
  },
}));
