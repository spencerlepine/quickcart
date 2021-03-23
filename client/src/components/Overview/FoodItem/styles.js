import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    tableBox: {
        position: "relative",
        width: "fit-content",
        fontSize: "1.2em !important",
        borderTop: "1px solid #333",
        borderLeft: "1px solid #e8e8e8",
        borderRight: "1px solid #e8e8e8",
        margin: 0,
        padding: "1%",
        textTransform: "capitalize",
        '& button': {
            fontSize: "1em !important",
            textTransform: "uppercase",
            border: "1px solid #ababab",
            '&:hover': {
                filter: "brightness(0.8)",
                position: "relative",
                top: "-2px",
            },
            '&:active': {
                position: "relative",
                top: "2px",
            },
        },
    },
    deleteButton: {
        color: "#65001b !important",
        backgroundColor: "#e86e6e",
    },
    addButton: {
        color: "#dcf5ff !important",
        backgroundColor: "#4bafff",
    },
    editButton: {
        color: "black",
        backgroundColor: "#fff3d0",
    },
}));