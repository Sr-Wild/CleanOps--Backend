//Models 
import { Usuario } from './MUser.js'
import { ReporteConsumo } from './MReporteConsumo.js'
import { Participantes } from './MParticipantes.js'
import { Orden } from "./MOrden.js"
import { NivelUsuario } from './MNivelUsuario.js'
import { Incidencia } from './MIncidencia.js'
import { ConsumoRecursos } from "./MConsumoRecurso.js"
import { AreaServicio } from './MAreaServicio.js'

//relationships between models
Usuario.hasOne(NivelUsuario, { foreignKey: 'NivelUsuarioId' })
Usuario.belongsTo(Participantes, { foreignKey: 'UsuarioId' })
Usuario.belongsTo(Incidencia, { foreignKey: 'Incidenciaid' })
Usuario.belongsTo(Orden, { foreignKey: 'UsuarioId' })
NivelUsuario.belongsTo(Usuario, { foreignKey: 'NivelUsuarioId' })
Incidencia.hasMany(Usuario, { foreignKey: 'UsuarioId' })
Orden.hasOne(Usuario, { foreignKey: 'UsuarioId' })
Participantes.hasMany(Usuario, { foreignKey: 'UsuarioId' })
ConsumoRecursos.hasMany(ReporteConsumo , { foreignKey: 'Reporteid' })
ReporteConsumo.belongsTo(ConsumoRecursos, { foreignKey: 'Reporteid' })
Participantes.hasMany(Orden, { foreignKey: 'OrdenId' })
Orden.belongsTo(Participantes, { foreignKey: 'OrdenId' })
Orden.hasOne(AreaServicio, { foreignKey: 'AreaServicioid' })
Orden.hasOne(Incidencia, { foreignKey: 'Incidenciaid' })
Orden.belongsTo(ReporteConsumo, { foreignKey: 'Ordenid' })
ReporteConsumo.hasOne(Orden, { foreignKey: 'OrdenId' })
AreaServicio.belongsTo(Orden, { foreignKey: 'OrdenId' })
Incidencia.belongsTo(Orden, { foreignKey: 'Incidenciaid' })
Incidencia.hasMany(AreaServicio, { foreignKey: 'AreaServicioId' })
AreaServicio.belongsTo(Incidencia, { foreignKey: 'Incidenciaid' })