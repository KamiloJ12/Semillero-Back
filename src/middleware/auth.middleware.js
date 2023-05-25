const jwt = require('jsonwebtoken');
const UsuarioService = require('../services/usuario.services');

const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization;

        if(!token){
            return next({
                status: 401,
                message: `No existe token en la peticion`,
                errorName: 'header incompleto'
            });
        }
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        const user = await UsuarioService.getById(payload.id);
        
        if( !user ) {
            return next({
                status: 400,
                message: "Usuario no encontrado",
                errorName: "Usuario no encontrado",
            });
        }

        if( user.estado == 'Inactivo'){
            return next({
                status: 401,
                message: "El usuario no cuenta con el permiso necesario",
                errorName: "Usuario inactivo",
            });
        }
        req.usuario = user;
        next();
    } catch(error) {
        next(error);
    }
}

module.exports = auth;