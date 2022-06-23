import Sequelize from 'sequelize'
import { ConsumoRecursos } from "./MConsumoRecurso.js"
import { Orden } from "./MOrden.js"
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
ReporteConsumo.belongsTo(ConsumoRecursos, { foreignKey: 'Reporteid' })
ReporteConsumo.hasOne(Orden, { foreignKey: 'OrdenId' })

