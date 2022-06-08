import Sequelize from 'sequelize'
import { sequelize } from '../db/db.js'

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
		telefono:{
			type:Sequelize.STRING(12),
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
Usuario.associate = (models)=>{
	Usuario.hasOne(models.NivelUsuario, { foreignKey: 'NivelUsuarioId' })
	Usuario.belongsTo(models.Participantes, { foreignKey: 'UsuarioId' })
	Usuario.belongsTo(models.Incidencia, { foreignKey: 'Incidenciaid' })
	Usuario.belongsTo(models.Orden, { foreignKey: 'UsuarioId' })

}