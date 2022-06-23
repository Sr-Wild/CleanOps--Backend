import Sequelize from 'sequelize'

// more info on https://sequelize.org/docs/v6/getting-started/
export const sequelize = new Sequelize(
	'testing', //database
	'postgres', //username
	'postgres', //password
	{
		host:'localhost',
		//dialect database
		dialect:"postgres"
	})

sequelize.authenticate().then(() => {
	console.log('Connection has been established successfully.');
}).catch(err => {
	console.error('Unable to connect to the database:', err);
})
sequelize.sync({force:true})