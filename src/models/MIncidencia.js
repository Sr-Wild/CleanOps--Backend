import Sequelize from 'sequelize'
import { sequelize } from '../db/db.js'
import { Usuario } from './MUser.js'
import { AreaServicio } from './MAreaServicio.js'
import { Orden } from './MOrden.js'

export const Incidencia = sequelize.define(
    'Incidencias',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        UsuarioId: {
            type: Sequelize.INTEGER
        },
        AreaServicioId: {
            type: Sequelize.INTEGER
        },
        descFalla: {
            type: Sequelize.STRING(200)
        },
        fecha: {
            type: Sequelize.DATE
        },
        estatus: {
            type: Sequelize.INTEGER
        }
    },
    {
        paranoid: true,

    }
)
Incidencia.hasMany(Usuario, { foreignKey: 'UsuarioId' })
Incidencia.hasMany(AreaServicio, { foreignKey: 'AreaServicioId' })
Incidencia.belongsTo(Orden, { foreignKey: 'Incidenciaid' })
