import { makeStyles } from "@material-ui/core/styles"

export default makeStyles(() => ({
  settingIcon: {
    marginLeft: "0",
    "@media (max-width: 900px)": {
      marginLeft: "auto",
    },
  },
  recommendedIcon: {
    "@media (max-width: 900px)": {
      margin: "auto",
    },
  },
  sidebar: {
    zIndex: 11,
    position: "fixed",
    top: "0",
    height: "100vh",
    paddingTop: "50px",
    minWidth: "250px",
    maxWidth: "300px",
    backgroundColor: "rgb(35, 35, 35)",
  },
  sidebarLink: {
    width: "max-content",
    marginLeft: "20%",
    display: "flex",  
    borderRadius: "4px",
    padding: "14px 10px",
    fontSize: "1.3em !important",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    color: "#e2e2e6",
    "& p": {
      margin: "5%",
      float: "right",
      padding: "0",
      marginLeft: "5px",
      whiteSpace: "nowrap",
    },
    "&:hover": {
      color: "gray",
    }
  },
}))
