const { Evento } = require('../models');

class EventoService {
    static async add(body) {
        try {
            const evento = await Evento.create(body);
            return evento;
        } catch(error) {
            throw error;
        }
    }

    static async getAll() {
        try {
            const evento = await Evento.findAll();
            return evento;
        } catch(error) {
            throw error;
        }
    }

    static async getById(id) {
        try {
            const evento = await Evento.findByPk(id);
            return evento;
        } catch(error) {
            throw error;
        }
    }

    static async update(id, body) {
        try {
            const evento = await Evento.update(body, {where: { id } });
            return evento;
        } catch(error) {
            throw error;
        }
    }
}

module.exports = EventoService;