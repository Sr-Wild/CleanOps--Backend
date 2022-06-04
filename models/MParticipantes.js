import Sequelize from 'sequelize'
import { sequelize } from '../db/db.js'

export const Participantes = sequelize.define(
    'Participantes',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        UsuarioId:{
            type: Sequelize.INTEGER
        },
        OrdenId:{
            type: Sequelize.INTEGER
        }
    } 
)
/* module.exports=(sequelize, Sequelize)=>{
    const Participantes =sequelize.define('Participantes',{
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        UsuarioId:{
            type: Sequelize.INTEGER
        },
        OrdenId:{
            type: Sequelize.INTEGER
        }
    },{
        timestamps: false
    })

    Participantes.associate = (models) => {
		Participantes.hasMany(models.Usuario, { foreignKey: 'UsuarioId' })
	    Participantes.hasMany(models.Orden, { foreignKey: 'OrdenId' })
	}
    
    return Participantes;
} */