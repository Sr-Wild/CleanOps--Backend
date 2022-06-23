import Sequelize from 'sequelize'
import { sequelize } from '../db/db.js'
import { Incidencia } from "./MIncidencia.js"
import { Orden } from "./MOrden.js"
export const AreaServicio = sequelize.define(
    'AreaServicios',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        codigo:{
            type: Sequelize.STRING(10),
            primaryKey:true,
			unique:true
        },
        descripcion: {
            type:Sequelize.STRING(100)
        },
        sector:{
            type:Sequelize.STRING(100)
        }
    },
    {
		paranoid:true,
		
	}
)
AreaServicio.belongsTo(Incidencia, { foreignKey: 'Incidenciaid' })
AreaServicio.belongsTo(Orden, { foreignKey: 'OrdenId' })
