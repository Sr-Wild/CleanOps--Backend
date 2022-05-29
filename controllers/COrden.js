'use strict '
const MOrden = require('../models/MOrden')
const responses = require('../utils/responses')

async function getAllOrders (req, res) {
  try {
    const orders = await MOrder.findAll({
        order: [['id', 'asc']]
    })
    responses.makeResponseOkData(res, orders, "Success")
  } catch (e) {
    responses.makeResponsesException(res, e)
  }
}

module.exports = {
    getAllOrders
}