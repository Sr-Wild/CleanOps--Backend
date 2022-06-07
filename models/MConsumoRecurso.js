import Sequelize from 'sequelize'
import { sequelize } from '../db/db.js'

export const ConsumoRecursos = sequelize.define(
    'ConsumoRecursos',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        OrdenId:{
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
ConsumoRecursos.associate = (models) => {
    ConsumoRecursos.hasMany(models.ConsumoRecursos, { foreignKey: 'Reporteid' })
}