import React, { useEffect } from 'react'
import { useSelector, connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import { updateRoute } from '../../stores/App/Actions'
import useStyles from './ChartsStyle.js'
import Container from '@material-ui/core/Container'

function Profile(props) {
  const user = useSelector((state) => state.user)
  const history = useHistory()

  useEffect(() => {
    if (user.firstName === '' && user.lastName === '') {
      props.updateRoute('/')
      history.push('/')
    }
  })

  return (
    <Container></Container>
  )
}

Profile.propTypes = {
  updateRoute: PropTypes.func,
}

const mapStateToProps = (state, ownProps) => ({})

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateRoute: (currentRoute) => dispatch(updateRoute(currentRoute)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
