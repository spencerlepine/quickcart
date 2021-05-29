import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  cartView: {
    maxWidth: "700px",
    marginTop: "1%",
    marginBottom: "1vh",
    backgroundColor: "white",
    padding: "2vh",
    borderRadius: "1vh",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: "1.2em",
  },
  itemsGrid: {
    display: "flex",
    overflow: "scroll",
    margin: "0 auto 5% auto",
    backgroundColor: "#fff",
  },
  userCart: {
    minHeight: "20vh",
    marginBottom: "50px",
  },
}));
