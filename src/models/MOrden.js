import Sequelize from 'sequelize'
import { sequelize } from '../db/db.js'
import { Usuario } from './MUser.js'
import { ReporteConsumo } from './MReporteConsumo.js'
import { Participantes } from './MParticipantes.js'
import { Incidencia } from './MIncidencia.js'
import { AreaServicio } from './MAreaServicio.js'

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
Orden.hasOne(AreaServicio, { foreignKey: 'AreaServicioid' })
Orden.hasOne(Usuario, { foreignKey: 'UsuarioId' })
Orden.hasOne(Incidencia, { foreignKey: 'Incidenciaid' })
Orden.belongsTo(ReporteConsumo, { foreignKey: 'Ordenid' })
Orden.belongsTo(Participantes, { foreignKey: 'OrdenId' })