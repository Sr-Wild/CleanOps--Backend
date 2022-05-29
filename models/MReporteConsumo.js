module.exports = (sequelize, Sequelize) => {
	const ReporteConsumo = sequelize.define('ReporteConsumo',{
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
    },{
        timestamps: false
    })

    ReporteConsumo.associate = (models) => {
		ReporteConsumo.belongsTo(models.ConsumoRecursos, { foreignKey: 'Reporteid' })
		ReporteConsumo.hasOne(models.Orden, { foreignKey: 'OrdenId' })
	}

    return ReporteConsumo;
}