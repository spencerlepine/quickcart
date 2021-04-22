import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        backgroundColor: "rgb(249, 249, 249) !important",
    },
    itemsGrid: {
        width: "fit-content !important",
        display: "grid",
        gridTemplateColumns: "auto auto auto auto",
        ['@media (max-width:1000px)']: { // eslint-disable-line no-useless-computed-key
            gridTemplateColumns: "auto auto auto",
        },
        ['@media (max-width:800px)']: { // eslint-disable-line no-useless-computed-key
            gridTemplateColumns: "auto auto",
        },
        
        margin: "5% auto",
        backgroundColor: "#fff",
    },
    warning: {
        width: "20em",
        margin: "2em auto",
        padding: "2em",
    },
    warningText: {
        padding: "1em",
        margin: "auto",
        width: "fit-content",
    },
}));