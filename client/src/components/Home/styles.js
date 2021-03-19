import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    homeLink: {
        "&.hover": {
            background:'black',
        },
        backgroundColor: "rgb(44, 44, 44)",
        borderRadius: "4px",
        padding: "4px",
        fontSize: "1.5em",
        textDecoration: "none",
    }
}));