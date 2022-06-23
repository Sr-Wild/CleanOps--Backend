import Sequelize from 'sequelize'
import { sequelize } from '../db/db.js'
import { Usuario } from './MUser.js'

export const NivelUsuario = sequelize.define(
    'NivelUsuario',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        descripcion: {
            type: Sequelize.STRING(10)
        },
        estatus: {
            type: Sequelize.INTEGER
        }
    }
)

NivelUsuario.belongsTo(Usuario, { foreignKey: 'NivelUsuarioId' })

