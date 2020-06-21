import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import { updateRoute } from '../../stores/App/Actions'
import useStyles from './AppHeaderStyle'

const AppHeader = (props) => {
  const history = useHistory()
  const classes = useStyles()
  const { currentRoute } = props

  // Ensure app header is showing correct route selected
  useEffect(() => {
    if (history.location.pathname !== currentRoute) props.updateRoute(history.location.pathname)
  }, [currentRoute])

  return (
    <AppBar position="static" style={{ marginBottom: 20 }}>
      <Toolbar>
        {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton> */}
        <Typography variant="h6" className={classes.title}>
          RP Funding App
        </Typography>
        <Box className={classes.title}>
          <Button
            style={{ margin: 10 }}
            color="inherit"
            onClick={(event) => navOnClick(event, '/')}
            variant={currentRoute === '/' ? 'outlined' : 'text'}
          >
            Orders
          </Button>

          <Button
            style={{ margin: 10 }}
            color="inherit"
            onClick={(event) => navOnClick(event, '/about')}
            variant={currentRoute === '/about' ? 'outlined' : 'text'}
          >
            About
          </Button>
        </Box>

        <Box className={classes.title}>
          <Button
            style={{ float: 'right' }}
            color="inherit"
            onClick={(event) =>
              window.open(
                'https://github.com/edowney29/interview-assignments/tree/master/RP%20Funding/rp-funding',
                '_blank'
              )
            }
          >
            GitHub
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )

  function navOnClick(event, route) {
    event.preventDefault()
    props.updateRoute(route)
    history.push(route)
  }
}

AppHeader.propTypes = {
  currentRoute: PropTypes.string,
  updateRoute: PropTypes.func,
}

const mapStateToProps = (state, ownProps) => ({
  currentRoute: state.app.currentRoute,
})

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateRoute: (currentRoute) => dispatch(updateRoute(currentRoute)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader)
