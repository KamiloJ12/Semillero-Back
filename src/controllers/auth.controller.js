const UsuarioService = require("../services/usuario.services");
const AuthServices = require("../services/auth.services");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const userLogin = async (req, res, next) => {
  try {
    const { correo, password } = req.body;
    const user = await UsuarioService.getByEmail(correo);
    
    // verifico si existe un usuario
    if (!user) {
        return next({
            status: 400,
            message: "Correo invalido",
            errorName: "Usuario no encontrado",
        });
    }
    if(user.rol == 'Estudiante') {
        return next({
            status: 401,
            message: "El usuario no cuenta con los permisos de administrador",
            errorName: "Usuario denegado"
        })
    }
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
        return next({
            status: 400,
            message: "La contraseña no concide con el correo del usuario",
            errorName: "Constraseña invalida",
        });
    }
    if(user.estado == "Inactivo"){
        return next({
            status: 401,
            message: "El usuario no cuenta con el permiso necesario",
            errorName: "Usuario inactivo",
        });
    }

    const { id, nombre, codigo, rol } = user;
    // TODO genera un token y enviarlo al usuario
    const token = AuthServices.genToken({ id, nombre, codigo });
    return res.status(200).json({ id, nombre, codigo, correo, rol, token });
  } catch (error) {
    next(error);
  }
}

const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization; // Obtener el token de los encabezados de la solicitud
    if (!token) {
      // No se proporcionó un token, enviar una respuesta de error
      return next({ 
        status: 401, 
        message: 'Acceso no autorizado',
        errorName: 'Token no valido' 
      });
    }

    const esTokenValido = jwt.verify(token, process.env.JWT_SECRET);
    if (esTokenValido) {
      const user = await UsuarioService.getById(esTokenValido.id);
      
      const { id, nombre, codigo, correo, rol } = user;
      return res.status(200).json({ id, nombre, codigo, correo, rol, token });
    } else {
      // El token no es válido, enviar una respuesta de error
      return next({ 
        status: 401, 
        message: 'Acceso no autorizado',
        errorName: 'Token no valido' 
      });
    }

  } catch(error) {
    next(error);
  }
}

module.exports = {
  userLogin,
  verifyToken
};