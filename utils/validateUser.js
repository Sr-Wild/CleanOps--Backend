import { check } from 'express-validator'
import { validateResult } from './validateHelpers.js'

export const validateCreate = [
	check('cedula').exists().notEmpty().isLength({ max: 10 }).isString(),
	check('contrasena').exists().notEmpty().isLength({ max: 40 }).isString(),
	check('nombre').exists().notEmpty().isLength({ max: 30 }).isString(),
	check('apellido').exists().notEmpty().isLength({ max: 30 }).isString(),
	check('correo').exists().notEmpty().isLength({ max: 30 }).isEmail(),
	check('telefono').exists().notEmpty().isLength({ max: 12 }).isString(),
	check('direccion').exists().notEmpty().isLength({ max: 100 }).isString(),
	check('fechanac').exists().notEmpty().isDate(),
	check('cargo').exists().notEmpty().isLength({ max: 20 }).isString(),
	check('disponibilidad').exists().notEmpty().isInt(),
	(req, res, next) => { validateResult(req, res, next) }
]

export const validateUpdate = [
	check('cedula').exists().notEmpty().isLength({ max: 10 }).isString().optional(),
	check('contrasena').exists().notEmpty().isLength({ max: 40 }).isString().optional(),
	check('nombre').exists().notEmpty().isLength({ max: 30 }).isString().optional(),
	check('apellido').exists().notEmpty().isLength({ max: 30 }).isString().optional(),
	check('correo').exists().notEmpty().isLength({ max: 30 }).isEmail().optional(),
	check('telefono').exists().notEmpty().isLength({ max: 12 }).isString().optional(),
	check('direccion').exists().notEmpty().isLength({ max: 100 }).isString().optional(),
	check('fechanac').exists().notEmpty().isDate().optional(),
	check('cargo').exists().notEmpty().isLength({ max: 20 }).isString().optional(),
	check('disponibilidad').exists().notEmpty().isInt().optional(),
	(req, res, next) => { validateResult(req, res, next) }
]
