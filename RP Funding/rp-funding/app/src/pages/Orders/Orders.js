import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { format } from 'date-fns'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'

import useStyles from './OrderStyle'
import apiInterface from '../../services/ApiService'
import googleInterface from '../../services/GoogleService'
import CreateOrder from '../../components/CreateOrder/CreateOrder'

const status = ['All Orders', 'Ordered', 'Processing', 'Shipped', 'Recieved']
/**
 * Displays all orders in a table
 */
function Orders() {
  const classes = useStyles()
  const [orders, setOrders] = useState([])
  const [filter, setFilter] = useState('All Orders')
  const [modalOpen, setModalOpen] = useState(false)

  // I seperated all the api calls here as a show of proof on how to fetch different queries
  // from the database tables. In the case one table fails; debugging will be easier.
  // Using as componentDidMount equivalent
  useEffect(() => {
    Promise.all([
      apiInterface.getAllOrders(),
      apiInterface.getAllOrderStatus(),
      apiInterface.getAllShippingAddress(),
    ]).then((data) => {
      const orders = data[0]
      const orderstatus = data[1]
      const shippingaddress = data[2]
      _.forEach(orders, (order) => {
        order.orderstatus = _.find(orderstatus, { orderStatusId: order.orderStatusId })
        order.shippingaddress = _.find(shippingaddress, { shippingAddressId: order.shippingAddressId })
      })
      setOrders(orders)
    })
  }, [])

  function openGoogleMaps(shippingaddress) {
    const str = `${shippingaddress.address} ${shippingaddress.city} ${shippingaddress.state} ${shippingaddress.zip}`
    googleInterface.openGoogleMaps(str)
  }

  // Runs on every render and always all a filter (for "all case" don't filter)
  function filterOrders() {
    if (filter === 'All Orders') return orders
    return _.filter(orders, (order) => {
      if (order.orderstatus) {
        return order.orderstatus.name === filter
      }
      return false
    })
  }

  return (
    <Container maxWidth={false}>
      <Toolbar className={classes.root}>
        <Box style={{ flex: 1 }}>
          <Typography variant="h6">Orders Table</Typography>
        </Box>
        <Box style={{ flex: 1 }}>
          <TextField fullWidth select value={filter} onChange={(event) => setFilter(event.target.value)}>
            {status.map((value, index) => (
              <MenuItem key={value} value={value}>
                {value}
              </MenuItem>
            ))}
          </TextField>
        </Box>
        <Box style={{ flex: 1 }}>
          <Button
            variant="contained"
            color="primary"
            style={{ float: 'right' }}
            onClick={(event) => setModalOpen(true)}
          >
            Create Order
          </Button>
        </Box>
      </Toolbar>

      <TableContainer component={Paper}>
        <Table className={classes.table} size="small">
          <TableHead>
            <TableRow>
              <TableCell>Order ID</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Created On</TableCell>
              <TableCell>Shipped On</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>City</TableCell>
              <TableCell>State</TableCell>
              <TableCell>Zip</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filterOrders().map((order) => (
              <TableRow key={order.orderId}>
                <TableCell component="th" scope="row">
                  {order.orderId}
                </TableCell>
                <TableCell>{order.orderstatus && order.orderstatus.name}</TableCell>
                <TableCell>{order.createdDate ? format(new Date(order.createdDate), 'PPpp') : ''}</TableCell>
                <TableCell>{order.shippedDate ? format(new Date(order.shippedDate), 'PPpp') : ''}</TableCell>
                <TableCell>{order.orderDescription}</TableCell>
                <TableCell>{order.shippingaddress && order.shippingaddress.address}</TableCell>
                <TableCell>{order.shippingaddress && order.shippingaddress.city}</TableCell>
                <TableCell>{order.shippingaddress && order.shippingaddress.state}</TableCell>
                <TableCell>{order.shippingaddress && order.shippingaddress.zip}</TableCell>
                <TableCell>
                  <Button
                    disabled={!order.shippingaddress}
                    variant="contained"
                    color="primary"
                    onClick={(event) => openGoogleMaps(order.shippingaddress)}
                  >
                    Locate
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <CreateOrder
        modalOpen={modalOpen}
        onModalClose={() => setModalOpen(false)}
        onOrderCreated={(value) => setOrders([...orders, value])}
      />
    </Container>
  )
}

Orders.propTypes = {}

const mapStateToProps = (state, ownProps) => ({})

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders)
