import Sequelize from 'sequelize'
import { sequelize } from '../db/db.js'

export const Incidencia = sequelize.define(
    'Incidencias',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        UsuarioId:{
            type: Sequelize.INTEGER
        },
        AreaServicioId:{
            type: Sequelize.INTEGER
        },
        descFalla:{
            type: Sequelize.STRING(200)
        },
        fecha:{
            type: Sequelize.DATE
        },
        estatus:{
            type: Sequelize.INTEGER
        }
    },
    {
		paranoid:true,
		
	}
)
Incidencia.associate = (models) => {
    Incidencia.hasMany(models.Usuario, { foreignKey: 'UsuarioId' })
    Incidencia.hasMany(models.AreaServicio, { foreignKey: 'AreaServicioId' })
    Incidencia.belongsTo(models.Orden, { foreignKey: 'Incidenciaid' })
}