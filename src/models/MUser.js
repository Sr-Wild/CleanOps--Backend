import Sequelize from 'sequelize'
import { sequelize } from '../db/db.js'
import { NivelUsuario } from './MNivelUsuario.js'
import { Participantes } from './MParticipantes.js'
import { Incidencia } from './MIncidencia.js'
import { Orden } from "./MOrden.js"

export const Usuario = sequelize.define(
	'Usuarios',
	{
		id:{
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		cedula:{
			type: Sequelize.STRING(10),
			primaryKey:true,
			unique:true
		},
		contrasena:{
			type: Sequelize.STRING(40)
		},
		nombre:{
			type:Sequelize.STRING(30)
		},
		apellido:{
			type:Sequelize.STRING(30)
		},
		correo:{
			type:Sequelize.STRING(40),
			unique: true
			
		},
		direccion:{
			type: Sequelize.STRING(100)
		},
		fechanac:{
			type: Sequelize.DATE
		},
		cargo:{
			type: Sequelize.STRING(20)
		},
		disponibilidad:{
			type: Sequelize.INTEGER
		},
		NivelUsuarioId: {
			type: Sequelize.INTEGER
		},
		
	},
	{
		paranoid:true,
		
	}
)
Usuario.hasOne(NivelUsuario,{foreignKey: 'NivelUsuarioId'})
Usuario.belongsTo(Participantes,{ foreignKey: 'UsuarioId' })
Usuario.belongsTo(Incidencia,{ foreignKey: 'Incidenciaid' })
Usuario.belongsTo(Orden,{ foreignKey: 'UsuarioId' })