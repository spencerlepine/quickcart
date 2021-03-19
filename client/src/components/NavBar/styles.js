import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    navbarContainer: {
        display: "flex",
        backgroundColor: "#333333",
        borderBottom: "2px solid #828282"
    },
    link: {
        backgroundColor: "rgb(44, 44, 44)",
        borderRadius: "4px",
        padding: "6px 10px",
        fontSize: "1.3em !important",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        textDecoration: "none",
        color: "#e2e2e6",
        marginTop: "auto",
        marginBottom: "auto",
    }
}));