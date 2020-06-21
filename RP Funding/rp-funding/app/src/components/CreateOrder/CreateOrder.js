import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Modal from '@material-ui/core/Modal'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container'
import MenuItem from '@material-ui/core/MenuItem'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'
import Fade from '@material-ui/core/Fade'
import Backdrop from '@material-ui/core/Backdrop'

import useStyles from './CreateOrderStyle'
import states from '../../constants/States'
import apiInterface from '../../services/ApiService'

/**
 * Reuseable CreateOrder component modal form
 * @param {*} props
 */
export default function CreateOrder(props) {
  const classes = useStyles()
  const [description, setDescription] = useState(null)
  const [address, setAddress] = useState(null)
  const [city, setCity] = useState(null)
  const [state, setState] = useState(null)
  const [zip, setZip] = useState(null)
  const [loading, setLoading] = useState(false)

  // Update only when props change
  useEffect(() => {}, [props])

  async function submitForm() {
    setLoading(true)
    try {
      const data = await apiInterface.postCreateOrder(description, address, city, state, zip)
      const order = { ...data.orders }
      order.orderstatus = data.orderstatus
      order.shippingaddress = data.shippingaddress
      props.onOrderCreated(order)
      props.onModalClose()
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Modal
      open={props.modalOpen}
      onClose={props.onModalClose}
      className={classes.modal}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={props.modalOpen}>
        <Container component={Paper}>
          <Box style={{ padding: 15 }}>
            <Typography variant="h6" style={{ float: 'left' }}>
              Create Order
            </Typography>
            {loading && <CircularProgress style={{ float: 'right' }} />}
          </Box>

          <TextField
            fullWidth
            label="Description"
            multiline
            onChange={(event) => setDescription(event.target.value)}
            disabled={loading}
          />
          <TextField
            fullWidth
            label="Address"
            onChange={(event) => setAddress(event.target.value)}
            inputProps={{ maxlength: 60 }}
            disabled={loading}
          />
          <TextField
            fullWidth
            label="City"
            onChange={(event) => setCity(event.target.value)}
            inputProps={{ maxlength: 35 }}
            disabled={loading}
          />
          <TextField
            fullWidth
            label="State"
            select
            onChange={(event) => setState(event.target.value)}
            disabled={loading}
          >
            {states.map((value, index) => (
              <MenuItem key={index} value={value.abbreviation}>
                {value.name}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            fullWidth
            label="Zip"
            onChange={(event) => setZip(event.target.value)}
            inputProps={{ maxlength: 10 }}
            disabled={loading}
          />

          <Box style={{ padding: 15 }}>
            <Button className={classes.buttonError} onClick={props.onModalClose} disabled={loading}>
              Cancel
            </Button>
            <Button
              style={{ float: 'right' }}
              variant="contained"
              color="primary"
              onClick={submitForm}
              disabled={loading}
            >
              Submit
            </Button>
          </Box>
        </Container>
      </Fade>
    </Modal>
  )
}

CreateOrder.propTypes = {
  modalOpen: PropTypes.bool.isRequired,
  onModalClose: PropTypes.func.isRequired,
  onOrderCreated: PropTypes.func,
}
