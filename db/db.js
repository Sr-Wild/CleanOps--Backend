const Sequelize = require('sequelize')

let connString = 'postgres://stsadyfsbnqade:9960d679b393e0c358101341b9205f3bd93f0c2dd800ac3f26a4464425731df8@ec2-34-230-153-41.compute-1.amazonaws.com:5432/d9fph5ruu8ehtf'

const sequelize = new Sequelize(connString,{
	dialect:'postgres',
	dialectOptions: {
		ssl: {
		  require: true,
		  rejectUnauthorized: false
		}
	  }
})
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const db = {}
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
