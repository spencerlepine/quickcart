import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    searchBar: {
        margin: "8px 5% 8px 5%",
        position: "relative",
        top: "3px",
        width: "100%",
        gridRow: "2",
        "@media (max-width: 900px)": {
            width: "90%",
            gridColumnStart: "1",
            gridColumnEnd: "5",
        },
    }
}));