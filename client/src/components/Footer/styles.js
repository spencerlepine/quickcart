import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    Footer: {
        backgroundColor: "white",
        textAlign: "center",
        width: "100%",
        minHeight: "6vh",
        color: "#7ea991",
        padding: "10px",
        // position: "fixed",
        bottom: "0",
        '& p': {
            display: "inline",
            width: "fit-content",
            padding: "0",
            marginRight: "5px",
        }
    },
    footerContainer: {
        display: "inline-flex",
        height: "fit-content",
    },
    footerLogo: {
        filter: "invert(1) brightness(0.3)",
        display: "inline",
        width: "32px",
        margin: "5px",
    },
    footerLink: {
        '& img': {
            borderRadius: "40%",
            padding: "2px",
            '&:hover': {
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 0px 4px",
            },
        }
    }
}));