const usuariosRoutes = require('./usuario.routes');
const authRoutes = require('./auth.routes');
const eventosRoutes = require('./eventos.routes');

const ApiRoutes = (app) => {
    app.use('/usuarios', usuariosRoutes);
    app.use('/auth', authRoutes);
    app.use('/eventos', eventosRoutes);
}

module.exports = ApiRoutes;