
import { makeResponsesException, makeResponsesOkData } from '../utils/responses.js'
import { Usuario } from '../models/MUser.js'


export const getAllUsers = async (req, res) => {
  try {
    const users = await Usuario.findAll({
      order: [['id', 'asc']]
    })
    makeResponsesOkData(res, users, "Success")
  } catch (e) {
    makeResponsesException(res, e)
  }
}

export const getUserById = async (req, res) => {
  try {
    const {id} = req.params
    console.log(id)
    const user = await Usuario.findOne({
      where: { id }
    })
    makeResponsesOkData(res, user, "Success")
  } catch (e) {
    makeResponsesException(res, e)
  }
}

export const createUser = async (req, res) => {
  try {
    const { cedula, contrasena, nombre, apellido, correo, telefono, direccion, fechanac, cargo, disponibilidad } = req.body
    const user = await Usuario.create({
      cedula,
      contrasena,
      nombre,
      apellido,
      correo,
      telefono,
      direccion,
      fechanac,
      cargo,
      disponibilidad,
    })
    makeResponsesOkData(res, user, "Success")
  } catch (e) {
    makeResponsesException(res, e)
  }
}

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params
    console.log(id)
    const { cedula, contrasena, nombre, apellido, correo, telefono, direccion, fechanac, cargo, disponibilidad } = req.body
    const user = await Usuario.update({
      cedula: cedula != cedula ? cedula = cedula: cedula,
      contrasena,
      nombre,
      apellido,
      correo,
      telefono,
      direccion,
      fechanac,
      cargo,
      disponibilidad,
    },
    {
      where: { id }
    })
    
    makeResponsesOkData(res, user, "Success")
  } catch (e) {
    makeResponsesException(res, e)
  }
}
