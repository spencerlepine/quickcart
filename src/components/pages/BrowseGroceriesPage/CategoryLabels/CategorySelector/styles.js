import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  categoryCard: {
    margin: "auto 6px",
    display: "inline",
    fontSize: "15px",
    lineHeight: "22px",
    padding: "15px 30px",
    width: "fit-content",
    whiteSpace: "nowrap",
    textTransform: "capitalize",
    fontWeight: "600",
    backgroundColor: "rgb(245 248 255)",
    color: "rgb(54 131 212)",
    borderRadius: "8px",
    cursor: "pointer",
    userSelect: "none",
    touchAction: "manipulation",
    border: "1px dashed",
    '&:hover': {
      backgroundColor: "rgb(211 224 255)",
    },
  },
}));
