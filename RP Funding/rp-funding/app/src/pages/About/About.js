import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

import useStyles from './AboutStyle'

/**
 * Information about this assignment
 */
function About() {
  const classes = useStyles()

  return (
    <Container component={Paper}>
      <Typography variant="h6" style={{ padding: 10 }}>
        About This Project
      </Typography>
      <Typography variant="body1" style={{ padding: 10 }}>
        I started this assignment using the create-react-app tool and by downloading Express's simple template. From
        there, I started building out the API and integrating Sequelize into the local MySQL database using a nicely
        organized set of routers, controllers, and models. From there I used React and Material UI to build out the
        frontend UI and table for the assignment. I achieved everything the assignment required and believe that the
        code and comments are straightforward and easy to understand. But I wanted to go beyond that and use Redux as a
        proof of concept. In order to do this, I added this About page with Redux to update the current route and apply
        the button highlight as appropriate. I hope this assignment showcases a few of my skills and a great
        understanding of React along with backend API development.
      </Typography>
      <Typography variant="body1" style={{ padding: 10 }}>
        In the future I would like to add test cases to the React app and Express router to ensure stability. Thank you
        for taking the time to read this and if you would like to check out my github where this repository is please go
        to&nbsp;
        <Link
          href="https://github.com/edowney29"
          target="_blank"
        >
          Eric Downey's GitHub
        </Link>
      </Typography>
    </Container>
  )
}

About.propTypes = {}

const mapStateToProps = (state, ownProps) => ({})

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(About)
