import Sequelize from 'sequelize'
import { sequelize } from '../db/db.js'

export const Orden = sequelize.define(
    'Ordenes',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Usuarioid:{
            type: Sequelize.INTEGER
        },
        AreaServicioid:{
            type: Sequelize.INTEGER
        },
        Incidenciaid:{
            type: Sequelize.INTEGER,
            allowNull: true
        },
        trabajo:{
            type: Sequelize.STRING(200)
        },
        fechainicio:{
            type: Sequelize.DATE
        },
        fechacierre:{
            type: Sequelize.DATE,
            allowNull: true
        },
        estado:{
            type: Sequelize.INTEGER
        },
    },
    {
		paranoid:true,
		
	}
)
Orden.associate = (models) => {
    Orden.hasOne(models.AreaServicio, { foreignKey: 'AreaServicioid' })
    Orden.hasOne(models.Orden, { foreignKey: 'UsuarioId' })
    Orden.hasOne(models.Incidencia, { foreignKey: 'Incidenciaid' })
    Orden.belongsTo(models.ReporteConsumo, { foreignKey: 'Ordenid' })
    Orden.belongsTo(models.Orden, { foreignKey: 'OrdenId' })
}