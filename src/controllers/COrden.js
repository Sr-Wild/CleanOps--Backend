import { makeResponsesException, makeResponsesOkData } from '../utils/responses.js'
import { Orden } from '../models/MOrden.js'

export const getAllOrders = async (req, res) => {
  try {
    const orders = await Orden.findAll({
      order: [['id', 'asc']]
    })
    makeResponsesOkData(res, orders, "Success")
  } catch (e) {
    makeResponsesException(res, e)
  }
}

export const getOrderById = async (req, res) => {
  try {
    const { id } = req.params
    const order = await Orden.findOne({
      where: { id }
    })
    makeResponsesOkData(res, order, "Success")
  } catch (e) {
    makeResponsesException(res, e)
  }
}

export const createOrder = async (req, res) => {
  try {
    const { trabajo, fechainicio,  fechacierre, estado } = req.body
    const order = await Orden.create({
     trabajo,
     fechainicio,
     fechacierre,
     estado
    })
    makeResponsesOkData(res, order, "Success")
  } catch (e) {
    makeResponsesException(res, e)
  }
}

export const updateOrder = async (req, res) => {
  try {
    const { id } = req.params
    const { trabajo, fechainicio,  fechacierre, estado } = req.body
    const order = await Orden.update({
     trabajo,
     fechainicio,
     fechacierre,
     estado
    },{
      where: { id }
    })
    makeResponsesOkData(res, order, "Success")
  } catch (e) {
    makeResponsesException(res, e)
  }
}

export const DeletOrderById = async (req, res) => {
  try {
    const { id } = req.params
    const order = await Orden.destroy({
      where: { id }
    })
    makeResponsesOkData(res, order, "Success")

  } catch (e) {
    makeResponsesException(res, e)
  }
}