import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    tableBox: {
        borderTop: "1px solid #333",
        borderLeft: "1px solid #e8e8e8",
        borderRight: "1px solid #e8e8e8",
        margin: 0,
        padding: "1%",
        width: "fit-content",
        textTransform: "capitalize",
    },
    tdButton: {
        padding: "4px",
        '&:hover': {
            backgroundColor: "#3333330e",
            position: "relative",
            top: "-2px",
        },
        '&:active': {
            position: "relative",
            top: "2px",
        }
    }
}));