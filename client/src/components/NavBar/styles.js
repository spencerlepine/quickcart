import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    navBar: {
        backgroundColor: "#333333",
        borderBottom: "2px solid #828282",
    },
    navbarContainer: {
        display: "flex",
        width: "70%",
        margin: "auto",
    },
    link: {
        // minWidth: "125px",
        width: "max-content",
        display: "inline-flex",
        backgroundColor: "rgb(44, 44, 44)",
        borderRadius: "4px",
        padding: "14px 10px",
        fontSize: "1.3em !important",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        textDecoration: "none",
        color: "#e2e2e6",
        marginTop: "auto",
        marginBottom: "auto",
        '& p': {
            margin: "5%",
            float: "right",
            padding: "0",
            marginLeft: "5px",
            whiteSpace: "nowrap",
        }
    }
}));