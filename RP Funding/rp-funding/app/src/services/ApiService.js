import axios from 'axios'

const baseApiUrl = 'http://localhost:8080/api'
const config = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
}

const apiInterface = {
  async getAllOrders() {
    try {
      const res = await axios.get(`${baseApiUrl}/orders`, config)
      if (res.data.success) {
        return res.data.data
      }
      throw res.data.message
    } catch (err) {
      throw err
    }
  },

  async getAllOrderStatus() {
    try {
      const res = await axios.get(`${baseApiUrl}/orders/status`, config)
      if (res.data.success) {
        return res.data.data
      }
      throw res.data.message
    } catch (err) {
      throw err
    }
  },

  async getAllShippingAddress() {
    try {
      const res = await axios.get(`${baseApiUrl}/orders/address`, config)
      if (res.data.success) {
        return res.data.data
      }
      throw res.data.message
    } catch (err) {
      throw err
    }
  },

  async postCreateOrder(description, address, city, state, zip) {
    const body = {
      description,
      address,
      city,
      state,
      zip,
    }

    try {
      const res = await axios.post(`${baseApiUrl}/orders`, body, config)
      if (res.data.success) {
        return res.data.data
      }
      throw res.data.message
    } catch (err) {
      throw err
    }
  },
}

export default apiInterface
