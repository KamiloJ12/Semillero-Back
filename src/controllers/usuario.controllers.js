const { subirArchivo } = require('../helpers/subir-archivo');
const UserService = require('../services/usuario.services');
const path = require('path');
const fs   = require('fs');

// Crear usuarios
const createUser = async(req, res, next) => {
    try {
        const { body } = req;
        
        if(body.rol != "Estudiante"){
            body.password = body.identificacion;
        }

        if(!body.id || body.id=='null') delete body.id;

        if ( req.files && Object.keys(req.files).length > 0 && req.files.archivo ) {
            const files = req.files;
            const avatar = await subirArchivo(files, undefined, 'usuarios');
            body.avatar = avatar;
        }
        
        const user = await UserService.add(body);
        res.status(201).json(user);
    } catch(error) {
        next(error);
    }
}

// Obtener usuarios
const getUsers = async(req, res, next) => {
    try {
        const users = await UserService.getAll();
        res.status(200).json(users);
    } catch(error) {
        next(error);
    }
}

// Obtener usuario por id
const getUserById = async(req, res, next) => {
    try {
        const { id } = req.params;
        const user = await UserService.getById(id);
        res.status(200).json(user);
    } catch(error) {
        next(error);
    }
}

// Actualizar usuarios
const updateUser = async(req, res, next) => {
    try {
        const { id } = req.params;
        const { body } = req;

        if ( req.files && Object.keys(req.files).length > 0 && req.files.archivo ) {
            const files = req.files;

            if(body.avatar) {
                const pathImagen = path.join( __dirname, '../uploads/usuarios', body.avatar );
                if ( fs.existsSync( pathImagen ) ) {
                    fs.unlinkSync( pathImagen );
                }
            }
            const avatar = await subirArchivo(files, undefined, 'usuarios');
            body.avatar = avatar;
        }
        
        const user = await UserService.update(id, body);
        res.status(200).json(user);
    } catch(error) {
        next(error);
    }
}

// Inactivar usuario
const desactivateUser = async(req, res, next) => {
    try {
        const { id } = req.params;
        
        const user = await UserService.inactivate(id);
        res.status(200).json(user);
    } catch(error) {
        next(error);
    }
}

// Activar usuario
const activateUser = async(req, res, next) => {
    try {
        const { id } = req.params;
        
        const user = await UserService.activate(id);
        res.status(200).json(user);
    } catch(error) {
        next(error);
    }
}

const getAvatar = async(req, res, next) => {
    try {
        const { avatar } = req.params;
        let pathImagen = path.join( __dirname, '../uploads/usuarios', avatar );
        console.log(pathImagen);
        if ( fs.existsSync( pathImagen ) ) {
            return res.sendFile( pathImagen )
        }
        pathImagen = path.join( __dirname, '../assets/user.png');
        console.log(pathImagen);
        res.sendFile( pathImagen );
    } catch(error) {
        console.log(error);
        next(error);
    }
}

module.exports = {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    desactivateUser,
    activateUser,
    getAvatar
}