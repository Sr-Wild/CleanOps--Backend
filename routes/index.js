module.exports = function (app) {
    app.use('/usuario', require('./RUser'))
    app.use('/nivelUsuario', require('./RNivelUsuario'))
}
