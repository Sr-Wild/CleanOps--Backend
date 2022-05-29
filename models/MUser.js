module.exports = (sequelize, Sequelize) => {
	const Usuario = sequelize.define('Usuarios',{
		id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
		cedula:{
			type: Sequelize.STRING(10)
		},
		contrasena:{
			type: Sequelize.STRING(30)
		},
		nombre:{
			type: Sequelize.STRING(30)
		},
		apellido:{
			type: Sequelize.STRING(30)
		},
		correo:{
			type: Sequelize.STRING(40)
		},
		telefono: {
			type: Sequelize.STRING(12)
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
		deletedAt: {
			type: Sequelize.DATE,
			allowNull: true
		}
	})

	Usuario.associate = (models) => {
		Usuario.hasOne(models.NivelUsuario, { foreignKey: 'NivelUsuarioId' })
		Usuario.belongsTo(models.Participantes, { foreignKey: 'UsuarioId' })
		Usuario.belongsTo(models.Incidencia, { foreignKey: 'Incidenciaid' })
		Usuario.belongsTo(models.Orden, { foreignKey: 'UsuarioId' })
	}

	return Usuario;
}