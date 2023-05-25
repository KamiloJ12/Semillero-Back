const { Usuario } = require('../models');

class UserService {
    static async add(body) {
        try {
            const user = await Usuario.create(body);
            return user;
        } catch(error) {
            throw error;
        }
    }

    static async getAll() {
        try {
            const users = await Usuario.findAll();
            return users;
        } catch(error) {
            throw error;
        }
    }

    static async getById(id) {
        try {
            const user = await Usuario.findByPk(id);
            return user;
        } catch(error) {
            throw error;
        }
    }

    static async getByEmail(email) {
        try {
            const user = await Usuario.findOne({ where: { correo: email } });
            return user;
        } catch(error) {
            throw error;
        }
    }

    static async update(id, body) {
        try {
            const user = await Usuario.update(body, {
                where: {
                    id
                }
            });
            return user;
        } catch(error) {
            throw error;
        }
    }

    static async inactivate(id) {
        try {
            const user = await Usuario.update({estado: 'Inactivo'}, {
                where: {
                    id
                }
            });
            return user;
        } catch(error) {
            throw error;
        }
    }

    static async activate(id) {
        try {
            const user = await Usuario.update({estado: 'Activo'}, {
                where: {
                    id
                }
            });
            return user;
        } catch(error) {
            throw error;
        }
    }
}

module.exports = UserService;