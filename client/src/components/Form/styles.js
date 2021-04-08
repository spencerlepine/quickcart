import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    formDiv: {
        marginTop: "5%",
    },
    paper: {
      marginTop: theme.spacing(2),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      minWidth: '70wh', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
      marginBottom: "1vh",
      backgroundColor: "white",
      padding: "8vh",
      borderRadius: "1vh",
      boxShadow: "1px 1px 1px #000",
    },
    button: {
      margin: theme.spacing(3, 0, 2),
    },
    formHeader: {
      color: "#3286c3",
      textShadow: "1px 1px 0 #7a7a7a59",
      textDecoration: "uppercase",
      marginBottom: "20px",
    }
  }));