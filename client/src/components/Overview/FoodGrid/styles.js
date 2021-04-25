import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
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
        margin: "0 auto 5% auto",
        backgroundColor: "#fff",
    },
    emptyPrompt: {
        width: "fit-content",
        margin: "2em auto",
        padding: "2em",
    },
}));