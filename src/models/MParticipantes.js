import Sequelize from 'sequelize'
import { sequelize } from '../db/db.js'
import { Usuario } from './MUser.js'
import { Orden } from './MOrden.js'

export const Participantes = sequelize.define(
    'Participantes',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        UsuarioId: {
            type: Sequelize.INTEGER
        },
        OrdenId: {
            type: Sequelize.INTEGER
        }
    }
)
Participantes.hasMany(Usuario, { foreignKey: 'UsuarioId' })
Participantes.hasMany(Orden, { foreignKey: 'OrdenId' })
