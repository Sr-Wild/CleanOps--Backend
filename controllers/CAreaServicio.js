'use strict'
const MAreaServicio = require('../models/MAreaServicio')
const responses = require('../utils/responses')

async function getAllAreaServicio (req, res) {
  try {
    const areaservicio = await MAreaServicio.findAll({
        order: [['id', 'asc']]
    })
    responses.makeResponseOkData(res, areaservicio, "Success")
  } catch (e) {
    responses.makeResponsesException(res, e)
  }
}

module.exports = {
    getAllAreaServicio
}