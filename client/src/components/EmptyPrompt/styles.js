import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
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
  actionButton: {
    display: "block",
    width: "fit-content",
    margin: "auto",
  },
  emptyImage: {
    margin: "auto",
    display: "inherit",
    height: "100px",
  },
  imageFilter: {
    filter: "invert(1) brightness(0.7)",
  },
  emptyMessage: {
    marginTop: "20px",
    textAlign: "center",
    fontSize: "20px",
    fontWeight: "600",
  },
  emptyContainer: {
    marginTop: "30px",
    marginBottom: "50px",
  },
}));
