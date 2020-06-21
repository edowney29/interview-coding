import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  buttonError: {
    color: theme.palette.error.main,
  },
}))
