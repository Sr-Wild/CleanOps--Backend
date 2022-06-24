import Sequelize from 'sequelize'
import { sequelize } from "../db/db.js"

export const ReporteConsumo = sequelize.define(
    'ReporteConsumo',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        OrdenId:{
            type: Sequelize.INTEGER
        },
        resumen: {
            type:Sequelize.STRING(200)
        }
    }
)


