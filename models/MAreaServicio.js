import Sequelize from 'sequelize'
import { sequelize } from '../db/db.js'
export const AreaServicio = sequelize.define(
    'AreaServicio',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        codigo:{
            type: Sequelize.STRING(10)
        },
        descripcion: {
            type:Sequelize.STRING(100)
        },
        sector:{
            type:Sequelize.STRING(100)
        }
    }
)
/* module.exports = (sequelize, Sequelize) => {
	const AreaServicio = sequelize.define('AreaServicio',{
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        codigo:{
            type: Sequelize.STRING(10)
        },
        descripcion: {
            type:Sequelize.STRING(100)
        },
        sector:{
            type:Sequelize.STRING(100)
        },
        deletedAt: {
            type: Sequelize.DATE,
            allowNull: true
        }
    })

    AreaServicio.associate = (models) => {
		AreaServicio.belongsTo(models.Incidencia, { foreignKey: 'Incidenciaid' })
		AreaServicio.belongsTo(models.Orden, { foreignKey: 'OrdenId' })
	}

    return AreaServicio;
}
 */