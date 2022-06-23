import Sequelize from 'sequelize'
import { sequelize } from '../db/db.js'
import { ReporteConsumo } from './MReporteConsumo.js'

export const ConsumoRecursos = sequelize.define(
    'ConsumoRecursos',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        ReporteId:{
            type: Sequelize.INTEGER
        },
        InventarioId:{
            type: Sequelize.INTEGER
        },
        cantidad: {
            type:Sequelize.INTEGER
        }
    }
    
)
ConsumoRecursos.hasMany(ReporteConsumo , { foreignKey: 'Reporteid' })