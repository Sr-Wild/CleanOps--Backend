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
Participantes.associate = (models) => {
    Participantes.hasMany(models.Usuario, { foreignKey: 'UsuarioId' })
    Participantes.hasMany(models.Orden, { foreignKey: 'OrdenId' })
}