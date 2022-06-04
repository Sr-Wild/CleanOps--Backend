import Sequelize from 'sequelize'


export const sequelize = new Sequelize(
	'testing',
	'postgres',
	'postgres',
	{
		host: 'localhost',
		dialect: 'postgres',

	})
sequelize.authenticate().then(() => {
	console.log('Connection has been established successfully.');
}).catch(err => {
		console.error('Unable to connect to the database:', err);
	});

/* const db = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.NivelUsuario = require("../models/MNivelUsuario")(sequelize, Sequelize);
db.usuarios = require("../models/MUser.js")(sequelize, Sequelize);
db.AreaServicios = require("../models/MAreaServicio.js")(sequelize, Sequelize);
db.Incidencia = require("../models/MIncidencia.js")(sequelize, Sequelize);
db.Participantes = require("../models/MParticipantes.js")(sequelize, Sequelize);
db.Orden = require("../models/MOrden")(sequelize, Sequelize);
db.ReporteConsumo = require("../models/MReporteConsumo.js")(sequelize, Sequelize);
db.ConsumoRecurso = require("../models/MConsumoRecurso.js")(sequelize, Sequelize);


module.exports = db
 */